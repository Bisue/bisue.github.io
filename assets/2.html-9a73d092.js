const e=JSON.parse(`{"key":"v-0247044e","path":"/posts/pusher-chat-app/2.html","title":"Pusher 를 이용한 실시간 채팅 웹앱 만들기 #2 (w/ Laravel, Nuxt)","lang":"ko-KR","frontmatter":{"icon":"pen-to-square","date":"2021-07-11T00:00:00.000Z","category":["실시간 채팅 앱 만들기 (Pusher)"],"tag":["Pusher","Laravel","Nuxt","Vue","Web"],"description":"Pusher 를 이용한 실시간 채팅 웹앱 만들기 #2 (w/ Laravel, Nuxt) 이번 글에서는 Laravel 개발 환경을 설정하고, 새로운 Laravel 프로젝트를 하나 만들어 그 프로젝트 안에서의 기본 설정과 Pusher 와의 연동을 위한 환경설정을 하겠습니다. 기본적으로 PHP와 패키지 매니저인 Composer가 로컬 환경에 설치되어 있다고 가정하겠습니다. 혹시 PHP, Composer가 설치가 되어있지 않다면 본인의 플랫폼에 맞춰서 PHP와 Composer를 설치해주세요. 이후에 사용할 MySQL도 같이 설치해주세요. (윈도우 환경에서는 패키지 매니저인 Chocolatey를 사용하여 설치하는 것을 추천합니다. 참고)","head":[["meta",{"property":"og:url","content":"https://bisue.github.io/posts/pusher-chat-app/2.html"}],["meta",{"property":"og:site_name","content":"비수의 개발 창고"}],["meta",{"property":"og:title","content":"Pusher 를 이용한 실시간 채팅 웹앱 만들기 #2 (w/ Laravel, Nuxt)"}],["meta",{"property":"og:description","content":"Pusher 를 이용한 실시간 채팅 웹앱 만들기 #2 (w/ Laravel, Nuxt) 이번 글에서는 Laravel 개발 환경을 설정하고, 새로운 Laravel 프로젝트를 하나 만들어 그 프로젝트 안에서의 기본 설정과 Pusher 와의 연동을 위한 환경설정을 하겠습니다. 기본적으로 PHP와 패키지 매니저인 Composer가 로컬 환경에 설치되어 있다고 가정하겠습니다. 혹시 PHP, Composer가 설치가 되어있지 않다면 본인의 플랫폼에 맞춰서 PHP와 Composer를 설치해주세요. 이후에 사용할 MySQL도 같이 설치해주세요. (윈도우 환경에서는 패키지 매니저인 Chocolatey를 사용하여 설치하는 것을 추천합니다. 참고)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-02-25T16:40:15.000Z"}],["meta",{"property":"article:tag","content":"Pusher"}],["meta",{"property":"article:tag","content":"Laravel"}],["meta",{"property":"article:tag","content":"Nuxt"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:published_time","content":"2021-07-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-25T16:40:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pusher 를 이용한 실시간 채팅 웹앱 만들기 #2 (w/ Laravel, Nuxt)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-25T16:40:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Laravel 프로젝트 만들기","slug":"laravel-프로젝트-만들기","link":"#laravel-프로젝트-만들기","children":[]},{"level":2,"title":"기본 Laravel 프로젝트 설정","slug":"기본-laravel-프로젝트-설정","link":"#기본-laravel-프로젝트-설정","children":[{"level":3,"title":".env 파일 수정","slug":"env-파일-수정","link":"#env-파일-수정","children":[]},{"level":3,"title":"데이터베이스 생성","slug":"데이터베이스-생성","link":"#데이터베이스-생성","children":[]},{"level":3,"title":"마이그레이션 실행 및 구동 확인","slug":"마이그레이션-실행-및-구동-확인","link":"#마이그레이션-실행-및-구동-확인","children":[]}]},{"level":2,"title":"Pusher 준비","slug":"pusher-준비","link":"#pusher-준비","children":[]},{"level":2,"title":"Pusher 연동을 위한 준비","slug":"pusher-연동을-위한-준비","link":"#pusher-연동을-위한-준비","children":[{"level":3,"title":"BroadcastServiceProvider 등록","slug":"broadcastserviceprovider-등록","link":"#broadcastserviceprovider-등록","children":[]},{"level":3,"title":".env 파일에 Pusher 앱 정보 기입","slug":"env-파일에-pusher-앱-정보-기입","link":"#env-파일에-pusher-앱-정보-기입","children":[]},{"level":3,"title":"Pusher PHP SDK 설치","slug":"pusher-php-sdk-설치","link":"#pusher-php-sdk-설치","children":[]}]},{"level":2,"title":"What's Next","slug":"what-s-next","link":"#what-s-next","children":[{"level":3,"title":"다음 포스팅","slug":"다음-포스팅","link":"#다음-포스팅","children":[]},{"level":3,"title":"앞으로의 포스팅","slug":"앞으로의-포스팅","link":"#앞으로의-포스팅","children":[]}]}],"git":{"createdTime":1677343215000,"updatedTime":1677343215000,"contributors":[{"name":"Chanhyuk Byeon","email":"bdu00chch@gmail.com","commits":1}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"posts/pusher-chat-app/2.md","localizedDate":"July 11, 2021","excerpt":"<h1> Pusher 를 이용한 실시간 채팅 웹앱 만들기 #2 (w/ Laravel, Nuxt)</h1>\\n<p>이번 글에서는 <code>Laravel</code> 개발 환경을 설정하고, 새로운 <code>Laravel</code> 프로젝트를 하나 만들어 그 프로젝트 안에서의 기본 설정과 <code>Pusher</code> 와의 연동을 위한 환경설정을 하겠습니다.</p>\\n<blockquote>\\n<p>기본적으로 <code>PHP</code>와 패키지 매니저인 <code>Composer</code>가 로컬 환경에 설치되어 있다고 가정하겠습니다. 혹시 <code>PHP</code>, <code>Composer</code>가 설치가 되어있지 않다면 본인의 플랫폼에 맞춰서 <code>PHP</code>와 <code>Composer</code>를 설치해주세요. 이후에 사용할 <code>MySQL</code>도 같이 설치해주세요.\\n(윈도우 환경에서는 패키지 매니저인 <code>Chocolatey</code>를 사용하여 설치하는 것을 추천합니다. <a href=\\"https://wani.kr/posts/2016/07/29/window-enviroment-settings/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">참고</a>)</p>\\n</blockquote>","autoDesc":true}`);export{e as data};
