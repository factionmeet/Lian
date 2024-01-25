/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50740
 Source Host           : localhost:3306
 Source Schema         : agriculture02

 Target Server Type    : MySQL
 Target Server Version : 50740
 File Encoding         : 65001

 Date: 07/04/2023 18:45:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for logistics
-- ----------------------------
DROP TABLE IF EXISTS `logistics`;
CREATE TABLE `logistics`  (
  `logistics_id` int(11) NOT NULL AUTO_INCREMENT,
  `logistics_user_id` int(11) NULL DEFAULT NULL,
  `logistics_only_key` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `location` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '仓储地点',
  `in_time` date NULL DEFAULT NULL COMMENT '入库时间',
  `out_time` date NULL DEFAULT NULL COMMENT '出库时间',
  `transport_person` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '运输人员',
  `leave_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '出发地',
  `arrive_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '目的地',
  PRIMARY KEY (`logistics_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 110 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of logistics
-- ----------------------------
INSERT INTO `logistics` VALUES (108, 325, '55a419f90a7041ceaf9a55abeccb4665', 'ghv', '2023-03-21', '2023-03-22', 'hkjgj', 'hjg', 'jhhjhj');
INSERT INTO `logistics` VALUES (109, 329, 'e6e63a9ec03a4f6c8a8b44ee7aa139a8', '1', '2023-03-25', '2023-03-11', '1', '北京市东城区东长安街天安门广场', '1');

-- ----------------------------
-- Table structure for planter
-- ----------------------------
DROP TABLE IF EXISTS `planter`;
CREATE TABLE `planter`  (
  `planter_user_id` int(11) NULL DEFAULT NULL,
  `planter_id` int(11) NOT NULL AUTO_INCREMENT,
  `planter_only_key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '溯源码',
  `temperature` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '环境温度',
  `env_humidity` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '环境湿度',
  `light` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '光照强度',
  `ph` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '土壤PH值',
  `soil_humidity` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '土壤湿度',
  `planter_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '农产品名称',
  PRIMARY KEY (`planter_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 533 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of planter
-- ----------------------------
INSERT INTO `planter` VALUES (327, 527, 'e6e63a9ec03a4f6c8a8b44ee7aa139a8', '1', '1', '1', '1', '1', '1');
INSERT INTO `planter` VALUES (331, 529, 'c17136dacf0547af8703e452a2b34263', '23', '43%', '23', '23', '是', '腊肉');
INSERT INTO `planter` VALUES (334, 530, '0b8c7bc53b0a4b788b39294e82ecd82b', '33', '22', '10', '30', '是', '腊肉');
INSERT INTO `planter` VALUES (324, 531, '12da2f6687144ff6a38ed9edc00249f0', '1', '1', '1', '1', '1', '1');
INSERT INTO `planter` VALUES (348, 532, '09fcea8c22bc4139b0d27c9549c0feca', '123', '2', '7', '3', '4', '与啊对吧');

-- ----------------------------
-- Table structure for process
-- ----------------------------
DROP TABLE IF EXISTS `process`;
CREATE TABLE `process`  (
  `process_user_id` int(11) NULL DEFAULT NULL,
  `process_only_key` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `factory_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `quality_inspector` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `process_person` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime(0) NULL DEFAULT NULL,
  `process_id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`process_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 152 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of process
-- ----------------------------
INSERT INTO `process` VALUES (322, '55a419f90a7041ceaf9a55abeccb4665', 'hh', 'ff', 'fgg', '2023-03-21 16:00:00', 149);
INSERT INTO `process` VALUES (328, 'e6e63a9ec03a4f6c8a8b44ee7aa139a8', '1', '1', '1', '2023-02-27 16:00:00', 150);
INSERT INTO `process` VALUES (349, '09fcea8c22bc4139b0d27c9549c0feca', 'iugdqwqw', 'lkna', '按规定以前', '2023-02-25 16:00:00', 151);

-- ----------------------------
-- Table structure for sale
-- ----------------------------
DROP TABLE IF EXISTS `sale`;
CREATE TABLE `sale`  (
  `sale_user_id` int(11) NULL DEFAULT NULL,
  `mall_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商场名称',
  `sale_time` date NULL DEFAULT NULL COMMENT '上架时间',
  `sale_person` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '销售人员',
  `price` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '农产品价格',
  `sale_only_key` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sale_id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`sale_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 111 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sale
-- ----------------------------
INSERT INTO `sale` VALUES (326, 'ghh', '2023-03-09', NULL, 'gjhf', '55a419f90a7041ceaf9a55abeccb4665', 108);
INSERT INTO `sale` VALUES (330, '1', '2023-02-26', NULL, '1', 'e6e63a9ec03a4f6c8a8b44ee7aa139a8', 109);
INSERT INTO `sale` VALUES (346, '去一趟打完关卡', '2023-02-25', NULL, '213', '09fcea8c22bc4139b0d27c9549c0feca', 110);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_flag` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '5 管理员  1 种植商 2 运输商 3 储运商 4 经销商',
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账户（手机号）',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 353 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (286, 'admin', '123456', '5', 'admin');
INSERT INTO `user` VALUES (289, 'admin2', '123456', '6', 'admin2');
INSERT INTO `user` VALUES (322, '强盛加工场', '123456', '2', 'process');
INSERT INTO `user` VALUES (323, '开心农场', '123456', '1', 'farm2');
INSERT INTO `user` VALUES (324, '北境农场', '123456', '1', 'farm1');
INSERT INTO `user` VALUES (325, '顺丰速运', '123456', '3', 'transport1');
INSERT INTO `user` VALUES (326, '快乐小店', '123456', '4', 'sale1');
INSERT INTO `user` VALUES (342, '1', '1', '1', '1');
INSERT INTO `user` VALUES (343, '1', '1', '2', '1');
INSERT INTO `user` VALUES (344, '1', '1', '3', '1');
INSERT INTO `user` VALUES (345, '1', '1', '4', '1');
INSERT INTO `user` VALUES (346, '01', '123456', '4', '123456');
INSERT INTO `user` VALUES (347, '01', '123456', '3', '123456');
INSERT INTO `user` VALUES (348, '01', '123456', '1', '123456');
INSERT INTO `user` VALUES (349, '01', '123456', '2', '123456');
INSERT INTO `user` VALUES (350, '01', '123456', '3', '123456');
INSERT INTO `user` VALUES (351, '01', '123456', '3', '123456');
INSERT INTO `user` VALUES (352, 'ada', '123', '1', 'ada');

SET FOREIGN_KEY_CHECKS = 1;
