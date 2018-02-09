/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : new-egg

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:56:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `ROM` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `small_img` varchar(255) DEFAULT NULL,
  `egg_img` varchar(255) DEFAULT NULL,
  `dianji` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机', 'Apple 苹果', 'iPhone X (A1865) 64GB 银色', '8388.00', '64G，128G', '天空灰，银色', '../img/a1.jpg,../img/a2.jpg,../img/a3.jpg,../img/a4.jpg,../img/a5.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '12');
INSERT INTO `goods` VALUES ('2', '1', '1', ' 1', '1.00', ' 1', ' 1', '../img/haitaologo.png,../img/haitaologo.png', ' ../img/haitaologo.png', '../img/list_egg.gif', '123');
INSERT INTO `goods` VALUES ('3', 'APPLE 苹果 iPhone7 A1660 金色 32G 移动联通电信4G手机', 'Apple 苹果', 'iPhone7 A1660 金色 32G 移动联通电信4G手机', '4899.00', '64G，128G，258G', '金色，银色,', '../img/c1.jpg,../img/c2.jpg,../img/c3.jpg,../img/c4.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('4', '华为 荣耀9 全网通 高配版 6GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI 华为', '高配版 6GB+64GB 魅海蓝', '2299.00', '64G，128G，258G', '琥铂金，海鸥灰', '../img/d1.jpg,../img/d2.jpg,../img/d3.jpg,../img/d4.jpg,../img/d5.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '2');
INSERT INTO `goods` VALUES ('5', '华为 HUAWEI P10 全网通 4GB+64GB 钻雕蓝 移动联通电信4G手机 双卡双待', 'HUAWEI 华为', '华为 HUAWEI P10 全网通 4GB+64GB', '2999.00', '64G,128G', '陶瓷白，草木绿，', '../img/e1.jpg,../img/e2.jpg,../img/e3.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '42');
INSERT INTO `goods` VALUES ('6', '华为 HUAWEI P10 全网通 4GB+128GB 陶瓷白 移动联通电信4G手机 双卡双待', 'HUAWEI 华为', '华为 HUAWEI P10 全网通 4GB+128GB 陶瓷白', '3399.00', '64G,128G', '陶瓷白，草木绿', '../img/f1.jpg,../img/f2.jpg,../img/f3.jpg,../img/f4.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '24');
INSERT INTO `goods` VALUES ('7', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI 华为', 'nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机', '1399.00', '64G,128G', '琥铂金，海鸥灰', '../img/g1.jpg,../img/g2.jpg,../img/g3.jpg,../img/g4.jpg,../img/g5.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '2');
INSERT INTO `goods` VALUES ('8', 'Apple 苹果 iPhone 8 (A1863) 移动联通电信4G手机 256G 银色', 'Apple 苹果', 'iPhone 8 (A1863) 华为 HUAWEI P10 全网通 4G', '7188.00', '64G，128G', '银色,天空灰', '../img/b1.jpg,../img/b2.jpg,../img/b3.jpg,../img/b4.jpg,../img/b5.jpg', '../img/haitaologo.png', '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('12', 'MIUI 小米 nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '23.00', '64G,128G', '陶瓷白，草木绿', '../img/index4.jpg,', null, '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('13', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '234.00', '64G,128G', '陶瓷白，草木绿', '../img/index5.jpg,', null, '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('14', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '34.00', '64G,128G', '陶瓷白，草木绿', '../img/index6.jpg,', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('15', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '345.00', '64G,128G', '陶瓷白，草木绿', '../img/index7.jpg,', null, '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('16', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '654.00', '64G,128G', '陶瓷白，草木绿', '../img/index8.jpg,', null, '../img/list_egg.gif', '3');
INSERT INTO `goods` VALUES ('17', 'MIUI 小米WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '5345.00', '64G,128G', '陶瓷白，草木绿', '../img/index9.jpg,', null, '../img/list_egg.gif', '3');
INSERT INTO `goods` VALUES ('18', 'MIUI 小米WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '535.00', '64G,128G', '陶瓷白，草木绿', '../img/index10.jpg,', null, '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('19', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '6345.00', '64G,128G', '陶瓷白，草木绿', '../img/index11.jpg,', null, '../img/list_egg.gif', '2');
INSERT INTO `goods` VALUES ('20', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '高配版 6GB+64GB 魅海蓝', '5345.00', '64G,128G', '陶瓷白，草木绿', '../img/index12.jpg,', null, '../img/list_egg.gif', '564');
INSERT INTO `goods` VALUES ('21', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '华为 HUAWEI P10 全网通 4G', '7345.00', '64G,128G', '陶瓷白，草木绿', '../img/index13.jpg,', null, '../img/list_egg.gif', '4');
INSERT INTO `goods` VALUES ('22', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '华为 HUAWEI P10 全网通 4G', '35.00', '64G,128G', '陶瓷白，草木绿', '../img/index14.jpg,', null, '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('23', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'MIUI 小米', '华为 HUAWEI P10 全网通 4G', '344.00', '64G,128G', '陶瓷白，草木绿', '../img/index15.jpg,', null, '../img/list_egg.gif', '23');
INSERT INTO `goods` VALUES ('24', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'Meizu 魅族', '华为 HUAWEI P10 全网通 4G', '345.00', '64G,128G', '陶瓷白，草木绿', '../img/index16.jpg,', null, '../img/list_egg.gif', '2');
INSERT INTO `goods` VALUES ('25', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', ' HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '786.00', '64G,128G', '陶瓷白，草木绿', '../img/index18.jpg,', null, '../img/list_egg.gif', '25');
INSERT INTO `goods` VALUES ('26', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '463.00', '64G,128G', '陶瓷白，草木绿', '../img/index19.jpg,', null, '../img/list_egg.gif', '5');
INSERT INTO `goods` VALUES ('27', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'Meizu 魅族', '华为 HUAWEI P10 全网通 4G', '53.00', '64G,128G', '陶瓷白，草木绿，', '../img/index20.jpg,', null, '../img/list_egg.gif', '5');
INSERT INTO `goods` VALUES ('28', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '4343.00', '64G,128G', '陶瓷白，草木绿，', '../img/index21.jpg,', null, '../img/list_egg.gif', '5');
INSERT INTO `goods` VALUES ('29', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'Meizu 魅族', '华为 HUAWEI P10 全网通 4G', '345.00', '64G,128G', '陶瓷白，草木绿，', '../img/index22.jpg,', null, '../img/list_egg.gif', '5');
INSERT INTO `goods` VALUES ('30', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '234.00', '64G,128G', '陶瓷白，草木绿，', '../img/index23.jpg,', null, '../img/list_egg.gif', '5');
INSERT INTO `goods` VALUES ('31', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '453.00', '64G,128G', '陶瓷白，草木绿，', '../img/index24.jpg,', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('32', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'Meizu 魅族', '华为 HUAWEI P10 全网通 4G', '3345.00', '64G,128G', '陶瓷白，草木绿，', '../img/index25.jpg,', null, '../img/list_egg.gif', '6');
INSERT INTO `goods` VALUES ('33', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '635.00', '64G,128G', '陶瓷白，草木绿，', '../img/index26.jpg,', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('34', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'Meizu 魅族', '华为 HUAWEI P10 全网通 4G', '64345.00', '64G,128G', '陶瓷白，草木绿，', '../img/index27.jpg,', null, '../img/list_egg.gif', '2');
INSERT INTO `goods` VALUES ('35', 'Meizu 魅族 nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '3434.00', '64G,128G', '陶瓷白，草木绿，', '../img/index28.jpg,', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('36', 'Meizu 魅族 nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'Meizu 魅族', '华为 HUAWEI P10 全网通 4G', '34535.00', '64G,128G', '陶瓷白，草木绿，', '../img/index29.jpg,', null, '../img/list_egg.gif', '2');
INSERT INTO `goods` VALUES ('37', '华为 HUAWEI nova WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', 'HUAWEI华为', '华为 HUAWEI P10 全网通 4G', '234.00', '64G,128G', '陶瓷白，草木绿，', '../img/index30.jpg,', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('38', 'Apple 苹果', null, '华为 HUAWEI P10 全网通 4G', '32.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '5');
INSERT INTO `goods` VALUES ('39', 'Apple 苹果', null, '高配版 6GB+64GB 魅海蓝', '23.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '4');
INSERT INTO `goods` VALUES ('40', 'Apple 苹果', null, 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', '3423.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('41', 'Apple 苹果', null, '高配版 6GB+64GB 魅海蓝', '243.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '3');
INSERT INTO `goods` VALUES ('42', 'Apple 苹果', null, '高配版 6GB+64GB 魅海蓝', '234.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('43', 'Apple 苹果', null, '高配版 6GB+64GB 魅海蓝', '234.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '8');
INSERT INTO `goods` VALUES ('44', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '234.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '348');
INSERT INTO `goods` VALUES ('45', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '2.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('46', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '2.00', '收64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '45');
INSERT INTO `goods` VALUES ('47', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '43.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('48', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '42.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('49', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '456345.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('50', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '14123.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '7');
INSERT INTO `goods` VALUES ('51', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '4564.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('52', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '76.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '4');
INSERT INTO `goods` VALUES ('53', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '6.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('54', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '6.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '4');
INSERT INTO `goods` VALUES ('55', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '8.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('56', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '65745.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('57', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '345.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '0');
INSERT INTO `goods` VALUES ('58', 'MIUI 小米 WAS-AL00 青春版 4GB+64GB 魅海蓝 移动联通电信4G手机 双卡双待', null, '高配版 6GB+64GB 魅海蓝', '43535.00', '64G,128G', '陶瓷白，草木绿，', '../img/index1.jpg', null, '../img/list_egg.gif', '5');
SET FOREIGN_KEY_CHECKS=1;
