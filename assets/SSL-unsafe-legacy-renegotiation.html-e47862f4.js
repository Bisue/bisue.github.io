import{_ as e,V as n,W as s,a1 as a}from"./framework-2bbdb842.js";const t={},o=a(`<h1 id="_1-node-ssl-unsafe-legacy-renegotiation" tabindex="-1"><a class="header-anchor" href="#_1-node-ssl-unsafe-legacy-renegotiation" aria-hidden="true">#</a> #1 [Node] SSL unsafe legacy renegotiation</h1><p>프로젝트를 진행하던 중에 다른 팀원이 <code>Node 16</code> 환경에서 개발하고 테스트 한 크롤링 부분이 <code>Node 18</code> 환경인 내 노트북에서 아래와 같은 에러 메세지를 출력하며 동작이 되지 않았다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error: write EPROTO 6C0F0000:error:0A000152:SSL routines:final_renegotiate:unsafe legacy renegotiation disabled:c:\\ws\\deps\\openssl\\openssl\\ssl\\statem\\extensions.c:922:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>구글링 해보니, Node 17 이상 (추정) 에서부터 대상 서버의 SSL이 <code>Renegotiation Indication Extension (RFC 5746)</code> 표준을 지키지 않아 <code>man-in-the-middle attacks (CVE-2009-3555)</code> 취약점이 존재하여 https 연결을 거부하는 듯 했다.</p><p>정석적인 해결 방법은 SSL을 교체하는 것이지만 지금은 다른 사이트를 크롤링 하는 것이고, 단순히 GET 요청을 하고 html을 파싱하는 프로세스기 때문에 이를 무시하고 정상적으로 요청을 보내도록 처리해주어야 했다.</p><p>방법을 찾아보니 대부분이 Node 환경 변수를 넣어주거나 노드 버전을 16으로 다운그레이드 하는 방법을 소개했었는데, Node 환경 변수는 Node 18 버전 이후 동작하지 않는 것 같았고, 단순히 노드 버전을 16으로 다운그레이드하는 방법은 당장은 돌아가겠지만, 배포 환경이나 이후 Node 버전에서의 동작을 생각해보면 나쁜 해결책이다.</p><p>코드 수준에서 작용 범위를 내가 정할 수 있는 해결 방법을 찾아보다가, 현재 프로젝트에서 사용 중인 http 클라이언트인 <code>axios</code> 에서 <code>httpsAgent</code> 옵션을 커스터마이징 할 수 있는 옵션을 제공하는 걸 확인했고, 여기서 <code>secureOptions</code> 을 <code>crypto</code> 라이브러리의 <code>SSL_OP_LEGACY_SERVER_CONNECT</code> 값으로 설정해주니 동작했다.</p><p>프로젝트에서 보내는 모든 요청이 SSL 문제가 생긴 그 사이트 하나만을 대상으로 하기 때문에, axios 인스턴스를 따로 만들지는 않고 엔트리 포인트에서 전역적으로 설정해주었다.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>httpsAgent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">https</span><span class="token punctuation">.</span><span class="token function">Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    secureOptions<span class="token operator">:</span> crypto<span class="token punctuation">.</span>constants<span class="token punctuation">.</span><span class="token constant">SSL_OP_LEGACY_SERVER_CONNECT</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[o];function i(p,d){return n(),s("div",null,c)}const r=e(t,[["render",i],["__file","SSL-unsafe-legacy-renegotiation.html.vue"]]);export{r as default};
