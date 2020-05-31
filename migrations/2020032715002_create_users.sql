CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `hash` varchar(32) NULL,
    `first_name` varchar(255) NOT NULL DEFAULT '',
    `last_name` varchar(255) NOT NULL  DEFAULT '',
    `api_key` varchar(32) NOT NULL  DEFAULT '',
    `google_id` varchar(32) NOT NULL  DEFAULT '',
    PRIMARY KEY (`id`),
    INDEX `hash_index` (`hash`),
    INDEX `api_key_index` (`api_key`),
    INDEX `google_id_index` (`google_id`)
);

INSERT INTO `users` (`hash` ,`first_name`, `last_name`) VALUES ('1EEA6DC-JAM4DP2-PHVYPBN-V0XCJ9X', 'Siim', 'Liimand');
