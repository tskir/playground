var profiles = profiles || {};
function register(profileID, funcFindProxyForURL) {
    profiles[profileID] = funcFindProxyForURL;
}
register('direct', function () {
    function FindProxyForURL(url, host) {
        return 'DIRECT';
    }
    return FindProxyForURL;
}());
register('bbf6e493-0871-4234-8a31-96384aaf9cdc', function () {
    function FindProxyForURL(url, host) {
        if (isPlainHostName(host)) {
            return 'DIRECT';
        }
        if (shExpMatch(host, '127.0.0.1')) {
            return 'DIRECT';
        }
        if (shExpMatch(host, '[::1]')) {
            return 'DIRECT';
        }
        return 'SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080';
    }
    return FindProxyForURL;
}());
function FindProxyForURL(url, host) {
    if (shExpMatch(host, '*.cdninstagram.com')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, '*.instagram.com')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, 'rutracker.org')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, '*.fbcdn.net')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, 'rutracker.net')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, '*.youtube.com')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, '*.googlevideo.com')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, '*.facebook.com')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, 'flibusta.is')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    if (shExpMatch(host, 'static.flibusta.is')) {
        return profiles['bbf6e493-0871-4234-8a31-96384aaf9cdc'](url, host);
    }
    return profiles['direct'](url, host);
}
