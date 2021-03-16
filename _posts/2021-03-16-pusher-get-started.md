---
date: 2021-03-16
title: "(작성중) 서버-클라이언트간 실시간 통신 솔루션 Pusher - Getting Started"
categories: pusher
tags: pusher
# 목차
toc: true
toc_sticky: true
---

# Get Started

기존 Laravel(Backend)/Vue(Frontend) 프로젝트에 간단한 채팅 서비스를 추가해보며 Pusher로 실시간 기능을 구현하는 법을 익힌다.

## Channel 생성

![pusher](/assets/img/pusher-overview/create-channel.png)

채널 이름, 클러스터 위치를 입력하고 채널을 생성한다.
(체크박스는 개발, 스테이징, 운영서버에서 각각 분리된 채널을 사용하기 위해 채널을 만들어준다. 웬만하면 체크하여 여러 채널을 만들어놓고 분리해서 쓰자.)

아래 프론트엔드, 백엔드 스택을 선택하는 부분은 아무거나 선택해도 된다. 그냥 채널 대시보드에서 코드 예제를 보여줄 때 여기서 선택한 언어/라이브러리 기준으로 보여주는것 같다.

일단 나는 Vue/Laravel로 진행할 예정이니 체크해뒀다.

## App Key 확인

채널을 만들었으면 만들어진 채널의 대시보드로 들어가 App Key를 확인한다.

```
app_id = "YOUR_APP_ID"
key = "YOUR_KEY"
secret = "YOUR_SECRET"
cluster = "ap3"
```

`cluster`를 제외한 나머지는 해당 채널을 사용할 때 필요한 고유한 키값들이며, `cluster`는 채널을 만들 때 선택한 클러스터의 위치명이다.

클라이언트 단에서 Pusher를 사용할 때 `key`와 `cluster`가 필요하다.  
서버 단에서 Pusher를 사용할 때 `app_id`, `key`, `secret`, `cluster` 모두가 필요하다.

위 키값 정보들이 노출되면, 내 서버가 아닌 다른 사람의 서버에서 우리의 채널에 이벤트를 발생시킬 수 있게 되어버린다.

클라이언트 단에서 사용하는 `key`는 어쩔 수 없이 노출된다 해도, `secret` 값은 절대 외부에 노출되지 않도록 주의한다.

## 백엔드 준비

Pusher를 라라벨 브로드캐스팅 드라이버로 설정한다.

### 브로드캐스트 서비스 프로바이더 등록

가장 먼저 프로젝트가 이전에 라라벨 브로드캐스팅 기능을 사용한 적이 없었다면 기본적으로 브로드캐스트 서비스 프로바이더가 비활성화 되어있다.
`config/app.php`의 `providers` 배열에 주석처리되어 있는 부분을 주석해제 해주자.

``` php
return [
  // ...
  'providers' => [
    // ...
    App\Providers\BroadcastServiceProvider::class,
    // ...
  ]
  // ...
]
```

### Pusher PHP SDK 설치

Composer로 Pusher에서 제공하는 PHP SDK를 설치하자.

``` bash
composer require pusher/pusher-php-server "^5.0"
```

### 브로드캐스팅 설정

이제 라라벨의 브로드캐스팅 드라이버로 Pusher를 지정하고, Pusher Channels에 접근하기 위해 필요한 정보들인 키값들을 설정해주어야 한다.

브로드캐스팅 설정들은 `config/broadcasting.php` 설정파일에서 가져오는데, 이곳에 직접 키값들을 작성해버리면 GIT 등으로 코드 버전관리를 할 경우에 민감한 내용인 키값이 그대로 노출된다. 또한 우리는 채널을 여러개 만들어 개발환경/실제운영환경 등 환경에 따라 서로 다른 채널을 사용하기로 하였으므로 `.env` 파일을 활용하여 키값을 불러온다.

기본적으로 `config/broadcasting.php` 에서는 Driver/Pusher Config 등을 `.env`에서 가져오도록 이미 설정되어있다.

따라서 `.env`에 해당 값들을 기입하기만 하면 된다.

```
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=YOUR_APP_ID
PUSHER_APP_KEY=YOUR_KEY
PUSHER_APP_SECRET=YOUR_SECRET
PUSHER_APP_CLUSTER=ap3
```

## 백엔드 채팅 서비스 로직 작성

채팅 서비스를 구현하기 위한 로직을 작성한다.

### ChatMessageSent 이벤트 생성

artisan 명령어로 새로운 이벤트 파일을 생성한다.

``` bash
php artisan make:event ChatMessageSent
```

만들어진 `ChatMessageSent` 클래스가 기본적인 채팅 메세지에 필요한 데이터를 가지며 `ShouldBroadcast` 인터페이스를 상속하고 구현하도록 이벤트 클래스를 구현한다.

``` php
<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatMessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $sender;
    public $message;

    public function __construct($sender, $message)
    {
        $this->sender = $sender;
        $this->message = $message;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('chat');
    }
}
```

### 권한 인증 채널 등록

권한 승인을 위한 `chat` 채널을 `routes/channels.php` 에 등록한다.

``` php
Broadcast::channel('chat', function ($user) {
    return true;
});
```

### 채팅 메세지 전송 라우트 정의

프론트에서 메세지를 적어 전송시킬 라우트를 정의한다. 간단한 메서드 하나 정도라 컨트롤러로 분리하지 않고 클로저로 작성했다.

``` php
Route::post('chat', function () {
    $validated = request()->validate(['message' => 'required|string']);
    $user = request()->user();

    broadcast(new App\Events\ChatMessageSent($user, $validated['message']))->toOthers();

    return response([
        'success' => true
    ], 200);
});
```

> Pusher와 라라벨 브로드캐스팅의 시험 구현을 목적으로 채팅 기록을 따로 데이터베이스에 저장하지 않고 브로드캐스팅만 하는 라우팅을 구현했다.

## 프론트엔드 준비

laravel-echo 라이브러리를 사용하여 라라벨의 브로드캐스팅을 구독하여 수신가능한 환경을 만든다.  
(프론트가 Vue/Webpack을 사용한다고 가정한다.)

### laravel-echo 설치

``` bash
npm install --save-dev laravel-echo pusher-js
```

### laravel-echo 준비

적절한 위치에서 laravel-echo 인스턴스를 생성한다.

``` js
import Echo from "laravel-echo"

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'YOUR_APP_KEY',
    cluster: 'ap3'
});
```

## 채팅 앱 작성

Vue로 재사용가능한 Chat 컴포넌트를 만든다.

### ChatApp.vue

``` vue
<template>
  <div class="chat">
    <div class="chat-list">
      <div v-for="(chat, index) in chats" :key="index" class="chat-item">
        <div class="chat-item-sender">{{ chat.sender }}</div>
        <div class="chat-item-message">{{ chat.message }}</div>
      </div>
    </div>
    <form @submit.prevent="send" class="chat-form">
      <input v-model="message" class="chat-input" type="text" />
      <button class="chat-send" type="submit">전송</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [],
      message: '',
    };
  },
  methods: {
    async send() {
      try {
        const { data } = await axios.post('/chat');
      } catch (e) {
        alert('An error occurred');
        console.log(e);
      }
    },
    recieveChat(chat) {
      this.chats.push(chat);
    },
  },
  mounted() {
    Echo.private('chat').listen('ChatMessageSent', e => {
      this.recieveChat(e);
    });
  },
  beforeDestroy() {
    Echo.leaveChannel('chat');
  },
};
</script>

<style scoped>
/* ..생략.. */
</style>
```

## 결과 확인

결과 확인을 위해 ChatApp 컴포넌트가 포함된 페이지를 두개 이상 켜놓고, 한 페이지에서 메세지를 전송한 다음 다른 페이지들에서 정상적으로 메세지 이벤트가 수신되는지 확인한다.