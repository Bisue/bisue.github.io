---
date: 2021-01-23
title: "Let's encrypt Certbot으로 발급받고 적용하기"
categories: ssl
tags: ssl
# 목차
toc: true
toc_sticky: true
---

## Certbot로 발급받기

인증서를 발급받는 과정은 Certbot 사이트에 잘 정리된대로 따라가면 된다.  
아래 과정은 해당 내용을 정리한 내용이다.  
[Certbot](https://certbot.eff.org/lets-encrypt/debianstretch-other)

### 1. Snapd 설치

(Debian OS 기준)
``` bash
sudo apt update
sudo apt install snapd
```

### 2. Snapd 버전 확인

``` bash
sudo snap install core
sudo snap refresh core
```

### 3. (Optional) 패키지매니저 산 Certbot 제거

(전에 기본 패키지매니저로 certbot을 설치한 적이 있는 경우만)
``` bash
sudo apt remove certbot
```

### 4. Certbot 설치

``` bash
sudo snap install --classic certbot
```

### 5. Certbot 실행가능하도록 설정

``` bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### 6. Certbot 실행/인증서 발급

웹 서버를 잠시 끄고 진행하는 방법을 사용,  
웹 서버를 끌 수 없는 경우에는 Certbot 사이트에서 다른 방법을 참고

#### 6-1. 웹서버 끄기

(Bitnami 기준)
``` bash
sudo /opt/bitnami/ctlscript.sh stop apache
```

#### 6-2. Certbot 실행

``` bash
sudo certbot certonly --standalone
```
Certbot을 실행하면 이것저것 정보를 물어본다.  
잘 입력하고 인증서를 발급받는다.

발급받은 인증서의 경로는 기본적으로 아래와 같다.
``` bash
/etc/letsencrypt/live/YOUR.DOMAIN/cert.pem
/etc/letsencrypt/live/YOUR.DOMAIN/privkey.pem
/etc/letsencrypt/live/YOUR.DOMAIN/fullchain.pem
```

### 7. 웹서버 SSL 설정

발급받은 인증서를 가지고 자신이 사용하는 웹서버에 맞게 SSL을 설정한다.  
(Apache, 기타 내 서버 환경 설정 기준)
``` apache
<VirtualHost *:443>
    DocumentRoot "/opt/bitnami/apps/YOUR.DOMAIN/public"
    ServerName YOUR.DOMAIN
    ServerAlias *.YOUR.DOMAIN
    SSLEngine on
    SSLCertificateChainFile /etc/letsencrypt/live/YOUR.DOMAIN/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/YOUR.DOMAIN/privkey.pem
    SSLCertificateFile /etc/letsencrypt/live/YOUR.DOMAIN/cert.pem
    <Directory "/opt/bitnami/apps/YOUR.DOMAIN/public">
        Options +MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted
    </Directory>
</VirtualHost>
```

### 8. (Optional) HTTP to HTTPS Redirect 설정

(Apache, 기타 내 서버 환경 설정 기준)
``` apache
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
위 부분을 기존 HTTP Vhost 부분에 추가


### 9. 웹서버 재시작 및 테스트

(Bitnami 기준)
``` bash
sudo /opt/bitnami/ctlscript.sh start apache
```
해당 사이트에 HTTPS 로 접속해 잘 적용되었는지 테스트한다.

### 10. (Optional) 인증서 갱신 관련

인증서 갱신을 테스트하기 위해 아래 커맨드를 실행한다.
``` bash
sudo certbot renew --dry-run
```

certbot으로 인증서를 발급받으면 기본적으로 cron에 등록되어 만기 전 자동으로 갱신된다.  
이 과정에서 서버를 잠시 껏다 키기 위해서 웹서버 종료/시작 커맨드를 훅에 등록해둔다.
(Bitnami 기준)
``` bash
sudo sh -c 'printf "#!/bin/sh\n/opt/bitnami/ctlscript.sh stop apache\n" > /etc/letsencrypt/renewal-hooks/pre/bitnami.sh'
sudo sh -c 'printf "#!/bin/sh\n/opt/bitnami/ctlscript.sh stop apache\n" > /etc/letsencrypt/renewal-hooks/post/bitnami.sh'
sudo chmod 755 /etc/letsencrypt/renewal-hooks/pre/bitnami.sh
sudo chmod 755 /etc/letsencrypt/renewal-hooks/post/bitnami.sh
```
