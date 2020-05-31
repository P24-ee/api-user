INSERT INTO `pages` (`name` ,`pattern`, `reverse`, `module`, `action`, `variables`)
VALUES
    ('profile', '/(\/(et|en|ru))?\/(profiil|profile)/', '/%language/%profile', 'user', 'profile', 'language,profile')
;
