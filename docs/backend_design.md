留言板后台方案设计

表设计

CREATE TABLE `tbl_message` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nickname` varchar(10) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `content` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `ip` varchar(15) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `create_time` int(10) unsigned NOT NULL,
  `update_time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



接口设计

post /message

req

  字段      	类型    	备注  
  content 	string	    
  nickname	string	    

res: 204

get /message/nickname

req

    {
        "nickname": "harry"
    }




