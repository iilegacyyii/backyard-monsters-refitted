import { Migration } from '@mikro-orm/migrations';

export class Migration20231227105714 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `save` (`basesaveid` integer not null primary key autoincrement, `baseid` text not null, `type` text not null, `userid` integer not null, `wmid` integer not null, `createtime` integer not null, `savetime` integer not null, `seed` integer not null, `saveuserid` integer not null, `bookmarked` integer not null, `fan` integer not null, `emailshared` integer not null, `unreadmessages` integer not null, `giftsentcount` integer not null, `id` integer not null, `canattack` integer not null, `cellid` integer not null, `baseid_inferno` integer not null, `fbid` text not null, `fortifycellid` integer not null, `name` text not null, `level` integer not null, `catapult` integer not null, `flinger` integer not null, `destroyed` integer not null, `damage` integer not null, `locked` integer not null, `points` integer not null, `basevalue` integer not null, `protected` integer not null, `lastupdate` integer not null, `usemap` integer not null, `homebaseid` integer not null, `credits` integer not null, `champion` text not null, `empiredestroyed` integer not null, `worldid` text not null, `event_score` integer not null, `chatenabled` integer not null, `relationship` integer not null, `timeplayed` integer not null, `version` integer not null, `clienttime` integer not null, `baseseed` integer not null, `healtime` integer not null, `empirevalue` integer not null, `basename` text not null, `attackreport` text not null, `over` integer not null, `protect` integer not null, `attackid` integer not null, `purchasecomplete` integer not null, `buildingdata` json null, `buildingkeydata` json null, `researchdata` json null, `stats` json null, `academy` json null, `rewards` json null, `aiattacks` json null, `monsters` json null, `resources` json null, `lockerdata` json null, `events` json null, `inventory` json null, `monsterbaiter` json null, `loot` json null, `storedata` json null, `coords` json null, `quests` json null, `player` json null, `krallen` json null, `siege` json null, `buildingresources` json null, `mushrooms` json null, `iresources` json null, `monsterupdate` json null, `buildinghealthdata` json null, `frontpage` json null, `created_at` datetime not null, `lastupdate_at` datetime not null, `attackcreatures` json null, `attackloot` json null, `lootreport` json null, `attackersiege` json null, `savetemplate` json null, `updates` json null, `effects` json null, `homebase` json null, `outposts` json null, `worldsize` json null, `wmstatus` json null, `chatservers` json null, `achieved` json null, `attacks` json null, `gifts` json null, `sentinvites` json null, `sentgifts` json null, `attackerchampion` json null, `fbpromos` json null);');

    this.addSql('create table `user` (`userid` integer not null primary key autoincrement, `save_basesaveid` integer null, `username` text not null, `last_name` text not null, `email` text not null, `password` text not null, `pic_square` text null, `timeplayed` integer not null default 0, `stats` json null, `friendcount` integer not null default 0, `sessioncount` integer not null default 0, `addtime` integer not null default 100, `bookmarks` json null, `_is_fan` integer not null default 0, `sendgift` integer not null default 0, `sendinvite` integer not null default 0, constraint `user_save_basesaveid_foreign` foreign key(`save_basesaveid`) references `save`(`basesaveid`) on delete set null on update cascade);');
    this.addSql('create unique index `user_save_basesaveid_unique` on `user` (`save_basesaveid`);');
    this.addSql('create unique index `user_username_unique` on `user` (`username`);');
    this.addSql('create unique index `user_email_unique` on `user` (`email`);');
  }

}