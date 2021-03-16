---
date: 2021-03-12
title: "서버-클라이언트간 실시간 통신 솔루션 Pusher - Overview"
categories: pusher
tags: pusher
# 목차
toc: true
toc_sticky: true
---

개인 사이트를 만들면서 서버에서 이벤트가 발생하면 클라이언트(브라우저 JS단)쪽에서 이를 해당 이벤트에 대한 데이터와 함께 감지하여 어떤 처리를 해야되는 부분을 구현할 필요가 생겼다.

구현을 어떻게 해야될까 찾아보다가 Redis와 Socket.IO로 직접 구현할 수 있는 방법을 찾아내긴 했는데, 기존 백엔드가 Laravel 인데다가, 전체 사이트에 비해 상대적으로 작은 부분의 구현때문에 상대적으로 거대한 인프라를 구축하는게 너무 오버헤드가 컸다.

그러던 중, Laravel과 궁합이 잘 맞아보이는 Pusher라는 솔루션을 찾아냈다. 아래는 관련 내용들을 찾아 내가 보기 편하게 정리해놓은 글이다.

# Pusher?

![pusher](/assets/img/pusher-overview/pusher.png)

Pusher는 서버와 클라이언트간 실시간 통신이 필요할 때(ex: 채팅, 다른 사용자의 활동 실시간 알람 등) 실시간 통신 구현에 필요한 인프라를 미리 구성해 API와 라이브러리 형식으로 쉽게 구현할 수 있도록 제공하는 Realtime Communication 솔루션이다.

기본적으로 과금 플랜마다 일일 메세지 제한, 동시접속수 등등에 제한을 걸어 서비스를 제공한다. 
무료로 사용할 수도 있는데, 현재 시점으로 하루 메세지 200K, 동시접속수 100 정도까지 사용하는 프로젝트에는 Pusher를 무료로 사용 가능하다.
[Pusher Docs](https://pusher.com/docs/channels)
[Pusher Pricing](https://pusher.com/channels/pricing)

Pusher는 크게 두 가지 분류의 서비스를 제공한다.

첫 번째는 Pusher Beams로, 크로스플랫폼 Push/Notification 기능을 API로써 제공한다. 웹에 적용하면 Web Notification API를 이용해 브라우저를 통한 운영체제 알림을 구현할 수 있다.

두 번째는 Pusher Channels다. 이 서비스가 내가 실시간 기능을 구현하는데 사용한 Pusher의 서비스다.

## Pusher Channels

Pusher Channels 서비스는 Pub/Sub 모델인 '채널'을 통해 서버와 클라이언트간 실시간 통신을 가능하게 한다.

기본적으로 백엔드단 라이브러리(SDK)와 프론트단 라이브러리를 여러 언어에 걸쳐 지원하는데, 언어별 문법 차이 정도밖에 없으니 아래에 나오는 코드들은 내가 썼던 Laravel(PHP)와 Vue(JS)를 기준으로 설명한다.

이 서비스의 핵심인 '채널'은 크게 3가지 종류로 나뉜다. 

### Public Channels

Public Channel은 이름에서 알 수 있다시피, 채널의 이름을 알고 있으면 누구나 구독(Subscription)할 수 있는 채널이다. 여기서 구독은 해당 채널에 이벤트가 발생할 때 그 이벤트의 수신자로 자신을 등록한다는 의미이다.

따라서 클라이언트가 채널을 구독하려고 시도할 때, 어떠한 권한 검증 절차 없이 구독 요청을 승인한다.

### Private Channels

Private Channel은 민감할 수 있는 데이터를 포함한 이벤트를 주고받을 때 사용할 수 있는 채널이다.

Public Channel과는 다르게 클라이언트가 구독을 요청하면 서버단에서 해당 클라이언트가 해당 채널을 구독할 수 있는 조건(권한)을 충족하는지를 검증한 뒤 해당 클라이언트의 구독 요청을 승인하거나 기각한다.

### Presence Channels

Presence Channel은 Private Channel에서 현재 채널을 구독한 클라이언트들의 명단 정보를 추가로 제공할 수 있는 채널이다.

구글 드라이브의 문서를 공유하고 다른 사람과 동시에 편집해보면 현재 누가 이 문서를 열고 편집하고 있는지 목록이 나오는 것을 알 수 있다. 또는 채팅 서비스 같은 것을 만들 때 채팅 참여자의 목록을 보여주고 싶을 수 있다. 

위와 같이 채널의 구독자 리스트가 필요한 경우에는 Presence Channels를 사용한다.

---

> Pusher는 또한 채널별로 Connections, Messages를 실시간 모니터링할 수 있고 디버그 콘솔 등 여러가지 기능을 제공하는 대시보드를 웹 상으로 지원한다. 채널에서 이벤트가 발생할 때 동작하는 Webhook을 걸 수도 있다.

---

