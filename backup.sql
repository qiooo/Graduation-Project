PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    empathy INT,
    phone_number VARCHAR(11) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);
INSERT INTO users VALUES(1,65,'13012345678','pass1234');
INSERT INTO users VALUES(2,88,'13123456789','secure5678');
INSERT INTO users VALUES(3,42,'13234567890','test9012');
INSERT INTO users VALUES(4,93,'13345678901','user3456');
INSERT INTO users VALUES(5,27,'13456789012','pass7890');
INSERT INTO users VALUES(6,59,'13567890123','secure2345');
INSERT INTO users VALUES(7,71,'13678901234','test6789');
INSERT INTO users VALUES(8,96,'13789012345','user0123');
INSERT INTO users VALUES(9,33,'13890123456','pass4567');
INSERT INTO users VALUES(10,84,'13901234567','secure8901');
CREATE TABLE admins (
    admin_id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_role TEXT CHECK(admin_role IN ('super_admin', 'normal_admin')) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
INSERT INTO admins VALUES(1,'super_admin',1);
INSERT INTO admins VALUES(2,'normal_admin',3);
INSERT INTO admins VALUES(3,'normal_admin',5);
INSERT INTO admins VALUES(4,'normal_admin',7);
INSERT INTO admins VALUES(5,'super_admin',9);
CREATE TABLE scenarios (
    scenario_id INTEGER PRIMARY KEY AUTOINCREMENT,
    relationship TEXT CHECK(relationship IN ('parent', 'relative', 'good_friend', 'normal_friend', 'known', 'stranger')) NOT NULL,
    depression_level TEXT CHECK(depression_level IN ('mild', 'moderate', 'severe', 'unknown')) NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
INSERT INTO scenarios VALUES(1,'parent','moderate',1);
INSERT INTO scenarios VALUES(2,'good_friend','mild',1);
INSERT INTO scenarios VALUES(3,'stranger','unknown',1);
INSERT INTO scenarios VALUES(4,'relative','severe',2);
INSERT INTO scenarios VALUES(5,'known','moderate',2);
INSERT INTO scenarios VALUES(6,'normal_friend','mild',3);
CREATE TABLE histories (
    history_id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id INTEGER NOT NULL,
    time DATETIME NOT NULL,
    words TEXT,
    behavior TEXT CHECK(behavior IN ('embrace', 'evade', 'excessive')),
    harm_score INTEGER NOT NULL,
    input_score INTEGER NOT NULL,
    FOREIGN KEY (scenario_id) REFERENCES scenarios(scenario_id) ON DELETE CASCADE
);
INSERT INTO histories VALUES(1,1,'2023-01-01 09:00:00','今天过得怎么样？','embrace',5,8);
INSERT INTO histories VALUES(2,1,'2023-01-02 14:30:00','别担心，一切都会好起来的。','embrace',3,7);
INSERT INTO histories VALUES(3,1,'2023-01-03 18:15:00','我在这里支持你。','embrace',2,9);
INSERT INTO histories VALUES(4,1,'2023-01-04 11:45:00','有时候事情会很难，但你很坚强。','embrace',4,8);
INSERT INTO histories VALUES(5,1,'2023-01-05 20:00:00','我们一起面对。','embrace',1,9);
INSERT INTO histories VALUES(6,1,'2023-01-06 13:30:00','你不是一个人。','embrace',3,7);
INSERT INTO histories VALUES(7,1,'2023-01-07 16:45:00','保持积极的心态。','embrace',2,8);
INSERT INTO histories VALUES(8,1,'2023-01-08 10:15:00','我相信你能克服困难。','embrace',4,7);
INSERT INTO histories VALUES(9,1,'2023-01-09 15:30:00','你很重要，你的感受很重要。','embrace',1,9);
INSERT INTO histories VALUES(10,1,'2023-01-10 19:00:00','需要帮忙随时说。','embrace',3,8);
CREATE TABLE empathy_questions (
    question_id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    is_release INTEGER NOT NULL  CHECK(is_release IN (0, 1))
);
INSERT INTO empathy_questions VALUES(1,'当看到别人哭泣时，我通常会：',1);
INSERT INTO empathy_questions VALUES(2,'当朋友向我倾诉烦恼时，我倾向于：',1);
INSERT INTO empathy_questions VALUES(3,'在团队合作中，我注意到有人看起来不开心，我会：',1);
INSERT INTO empathy_questions VALUES(4,'当读到关于他人苦难的新闻时，我的反应是：',1);
INSERT INTO empathy_questions VALUES(5,'当有人表达与我不同的观点时，我会：',1);
INSERT INTO empathy_questions VALUES(6,'看到小动物受伤，我的感受是：',1);
INSERT INTO empathy_questions VALUES(7,'当同事获得晋升而我没有时，我会：',1);
INSERT INTO empathy_questions VALUES(8,'当与情绪激动的人交流时，我通常：',1);
INSERT INTO empathy_questions VALUES(9,'当看到有人被欺负时，我的第一反应是：',1);
INSERT INTO empathy_questions VALUES(10,'当听朋友讲述成功经历时，我会：',1);
CREATE TABLE options (
    option_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id INTEGER NOT NULL,
    option_text TEXT NOT NULL,
    point INTEGER NOT NULL,
    FOREIGN KEY (question_id) REFERENCES empathy_questions(question_id) ON DELETE CASCADE
);
INSERT INTO options VALUES(1,1,'感到不舒服并想转移注意力',3);
INSERT INTO options VALUES(2,1,'询问他们是否需要帮助',7);
INSERT INTO options VALUES(3,1,'感同身受并可能跟着情绪波动',10);
INSERT INTO options VALUES(4,1,'分析他们哭泣的原因',5);
INSERT INTO options VALUES(5,2,'给出解决问题的建议',6);
INSERT INTO options VALUES(6,2,'倾听并表达理解',10);
INSERT INTO options VALUES(7,2,'分享自己类似的经历',8);
INSERT INTO options VALUES(8,2,'转移到更积极的话题',2);
INSERT INTO options VALUES(9,3,'继续工作，这不关我的事',1);
INSERT INTO options VALUES(10,3,'私下询问他们是否还好',10);
INSERT INTO options VALUES(11,3,'向其他团队成员提及此事',5);
INSERT INTO options VALUES(12,3,'开个玩笑试图让他们感觉好点',7);
INSERT INTO options VALUES(13,4,'快速浏览过去',2);
INSERT INTO options VALUES(14,4,'感到同情但很快忘记',4);
INSERT INTO options VALUES(15,4,'思考如何能帮助',10);
INSERT INTO options VALUES(16,4,'深入思考社会问题',7);
INSERT INTO options VALUES(17,5,'立即反驳',1);
INSERT INTO options VALUES(18,5,'尝试理解他们的立场',10);
INSERT INTO options VALUES(19,5,'保持沉默但不同意',3);
INSERT INTO options VALUES(20,5,'寻找共同点',8);
INSERT INTO options VALUES(21,6,'有点难过但不会多想',4);
INSERT INTO options VALUES(22,6,'感到同情并可能提供帮助',7);
INSERT INTO options VALUES(23,6,'非常难过，难以忘怀',10);
INSERT INTO options VALUES(24,6,'觉得这是自然规律',2);
INSERT INTO options VALUES(25,7,'感到嫉妒',1);
INSERT INTO options VALUES(26,7,'真心为他们高兴',10);
INSERT INTO options VALUES(27,7,'认为这不公平',3);
INSERT INTO options VALUES(28,7,'分析他们的优势并自我反思',7);
INSERT INTO options VALUES(29,8,'变得紧张或生气',2);
INSERT INTO options VALUES(30,8,'保持冷静并试图缓和气氛',10);
INSERT INTO options VALUES(31,8,'加入他们的情绪',4);
INSERT INTO options VALUES(32,8,'寻找解决问题的方法',7);
INSERT INTO options VALUES(33,9,'视而不见',1);
INSERT INTO options VALUES(34,9,'挺身而出',10);
INSERT INTO options VALUES(35,9,'告诉权威人士',8);
INSERT INTO options VALUES(36,9,'不确定该怎么做',5);
INSERT INTO options VALUES(37,10,'感到高兴',7);
INSERT INTO options VALUES(38,10,'分享自己的成就',4);
INSERT INTO options VALUES(39,10,'思考自己的不足',2);
INSERT INTO options VALUES(40,10,'真心为他们感到骄傲',10);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('users',10);
INSERT INTO sqlite_sequence VALUES('admins',5);
INSERT INTO sqlite_sequence VALUES('scenarios',6);
INSERT INTO sqlite_sequence VALUES('histories',10);
INSERT INTO sqlite_sequence VALUES('empathy_questions',10);
INSERT INTO sqlite_sequence VALUES('options',40);
COMMIT;
