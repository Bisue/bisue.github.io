---
icon: pen-to-square
date: 2023-02-12
category:
  - 개발 팁
tag:
  - Node
  - SSL
  - Axios
---

# #1 [Node] SSL unsafe legacy renegotiation

프로젝트를 진행하던 중에 다른 팀원이 `Node 16` 환경에서 개발하고 테스트 한 크롤링 부분이 `Node 18` 환경인 내 노트북에서 아래와 같은 에러 메세지를 출력하며 동작이 되지 않았다.

```
Error: write EPROTO 6C0F0000:error:0A000152:SSL routines:final_renegotiate:unsafe legacy renegotiation disabled:c:\ws\deps\openssl\openssl\ssl\statem\extensions.c:922:
```

구글링 해보니, Node 17 이상 (추정) 에서부터 대상 서버의 SSL이 `Renegotiation Indication Extension (RFC 5746)` 표준을 지키지 않아 `man-in-the-middle attacks (CVE-2009-3555)` 취약점이 존재하여 https 연결을 거부하는 듯 했다.

정석적인 해결 방법은 SSL을 교체하는 것이지만 지금은 다른 사이트를 크롤링 하는 것이고, 단순히 GET 요청을 하고 html을 파싱하는 프로세스기 때문에 이를 무시하고 정상적으로 요청을 보내도록 처리해주어야 했다.

방법을 찾아보니 대부분이 Node 환경 변수를 넣어주거나 노드 버전을 16으로 다운그레이드 하는 방법을 소개했었는데, Node 환경 변수는 Node 18 버전 이후 동작하지 않는 것 같았고, 단순히 노드 버전을 16으로 다운그레이드하는 방법은 당장은 돌아가겠지만, 배포 환경이나 이후 Node 버전에서의 동작을 생각해보면 나쁜 해결책이다.

코드 수준에서 작용 범위를 내가 정할 수 있는 해결 방법을 찾아보다가, 현재 프로젝트에서 사용 중인 http 클라이언트인 `axios` 에서 `httpsAgent` 옵션을 커스터마이징 할 수 있는 옵션을 제공하는 걸 확인했고, 여기서 `secureOptions` 을 `crypto` 라이브러리의 `SSL_OP_LEGACY_SERVER_CONNECT` 값으로 설정해주니 동작했다.

프로젝트에서 보내는 모든 요청이 SSL 문제가 생긴 그 사이트 하나만을 대상으로 하기 때문에, axios 인스턴스를 따로 만들지는 않고 엔트리 포인트에서 전역적으로 설정해주었다.

``` ts
axios.defaults.httpsAgent = new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
});
```
