const e=JSON.parse('{"key":"v-1c908f82","path":"/posts/npm-deployment/1-NPM-deployment-1.html","title":"NPM 라이브러리 배포 - 1) 독립형","lang":"ko-KR","frontmatter":{"icon":"pen","date":"2023-10-26T00:00:00.000Z","category":["개발 팁"],"tag":["Node","NPM","Package"],"sticky":true,"star":true,"description":"NPM 라이브러리 배포 - 1) 독립형 개요 NPM 라이브러리 배포에 관심이 생겨, 배포하려는 라이브러리의 유형별로 배포 프로세스를 나름대로 정리하여 기록하려고 한다. 개인적인 분류 체계를 두어 라이브러리의 유형을 크게 두 가지로 나누어 구분하려고 한다. 독립형 다른 기반 패키지 없이 홀로 동작할 수 있는 라이브러리 종속형 다른 기반 패키지 위에서 동작하도록 작성된 라이브러리","head":[["meta",{"property":"og:url","content":"https://bisue.github.io/posts/npm-deployment/1-NPM-deployment-1.html"}],["meta",{"property":"og:site_name","content":"비수의 개발 창고"}],["meta",{"property":"og:title","content":"NPM 라이브러리 배포 - 1) 독립형"}],["meta",{"property":"og:description","content":"NPM 라이브러리 배포 - 1) 독립형 개요 NPM 라이브러리 배포에 관심이 생겨, 배포하려는 라이브러리의 유형별로 배포 프로세스를 나름대로 정리하여 기록하려고 한다. 개인적인 분류 체계를 두어 라이브러리의 유형을 크게 두 가지로 나누어 구분하려고 한다. 독립형 다른 기반 패키지 없이 홀로 동작할 수 있는 라이브러리 종속형 다른 기반 패키지 위에서 동작하도록 작성된 라이브러리"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bisue.github.io/"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-11-04T11:58:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"NPM 라이브러리 배포 - 1) 독립형"}],["meta",{"property":"article:author","content":"변찬혁"}],["meta",{"property":"article:tag","content":"Node"}],["meta",{"property":"article:tag","content":"NPM"}],["meta",{"property":"article:tag","content":"Package"}],["meta",{"property":"article:published_time","content":"2023-10-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-04T11:58:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NPM 라이브러리 배포 - 1) 독립형\\",\\"image\\":[\\"https://bisue.github.io/\\"],\\"datePublished\\":\\"2023-10-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-04T11:58:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"변찬혁\\",\\"url\\":\\"https://github.com/Bisue\\",\\"email\\":\\"bdu00chch@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"개요","slug":"개요","link":"#개요","children":[]},{"level":2,"title":"목차","slug":"목차","link":"#목차","children":[]},{"level":2,"title":"사전 준비","slug":"사전-준비","link":"#사전-준비","children":[{"level":3,"title":"NPM 계정 준비","slug":"npm-계정-준비","link":"#npm-계정-준비","children":[]},{"level":3,"title":"Node 개발 환경 준비","slug":"node-개발-환경-준비","link":"#node-개발-환경-준비","children":[]}]},{"level":2,"title":"라이브러리 작성","slug":"라이브러리-작성","link":"#라이브러리-작성","children":[{"level":3,"title":"NPM Init","slug":"npm-init","link":"#npm-init","children":[]},{"level":3,"title":"코드 작성","slug":"코드-작성","link":"#코드-작성","children":[]},{"level":3,"title":"로컬 배포 및 테스트","slug":"로컬-배포-및-테스트","link":"#로컬-배포-및-테스트","children":[]}]},{"level":2,"title":"ESM 및 CommonJS 지원","slug":"esm-및-commonjs-지원","link":"#esm-및-commonjs-지원","children":[]},{"level":2,"title":"타입스크립트 지원","slug":"타입스크립트-지원","link":"#타입스크립트-지원","children":[{"level":3,"title":"타입 정보(d.ts) 추가","slug":"타입-정보-d-ts-추가","link":"#타입-정보-d-ts-추가","children":[]},{"level":3,"title":"타입스크립트 -> ESM/CommonJS","slug":"타입스크립트-esm-commonjs","link":"#타입스크립트-esm-commonjs","children":[]},{"level":3,"title":"NPM 배포","slug":"npm-배포","link":"#npm-배포","children":[]}]}],"git":{"createdTime":1699099097000,"updatedTime":1699099097000,"contributors":[{"name":"Chanhyuk Byeon","email":"bdu00chch@gmail.com","commits":1}]},"readingTime":{"minutes":4.64,"words":1393},"filePathRelative":"posts/npm-deployment/1-NPM-deployment-1.md","localizedDate":"2023년 10월 26일","excerpt":"<h1> NPM 라이브러리 배포 - 1) 독립형</h1>\\n<h2> 개요</h2>\\n<p>NPM 라이브러리 배포에 관심이 생겨, 배포하려는 라이브러리의 유형별로 배포 프로세스를 나름대로 정리하여 기록하려고 한다.</p>\\n<p>개인적인 분류 체계를 두어 라이브러리의 유형을 크게 두 가지로 나누어 구분하려고 한다.</p>\\n<ol>\\n<li>독립형\\n<ul>\\n<li>다른 기반 패키지 없이 홀로 동작할 수 있는 라이브러리</li>\\n</ul>\\n</li>\\n<li>종속형\\n<ul>\\n<li>다른 기반 패키지 위에서 동작하도록 작성된 라이브러리</li>\\n</ul>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
