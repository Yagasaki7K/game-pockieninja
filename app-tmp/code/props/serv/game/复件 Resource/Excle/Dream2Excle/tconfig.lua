--源文件的存放目录
ExcelPath = "..\\"

--目标文件的生成目录;
DatFilePath = "..\\..\\"


--生成配置
GenFile = {
	[1] = { name = "logicscene.ini" , subdir = "scene" , type = 0,
		step = {
			[1] = {excel = "Scene/Scene.xlsx" , sheet = "logicscene"},
		}
	},
	[2] = { name = "npc.ini" , subdir = "npc" , type = 0,
		step = {
			[1] = {excel = "Npc/Npc.xlsx" , sheet = "normalnpc"},
			[2] = {excel = "Npc/Npc.xlsx" , sheet = "funnpc"},
			[3] = {excel = "Npc/Npc.xlsx" , sheet = "buildnpc"},
			[4] = {excel = "Npc/Npc.xlsx" , sheet = "TaskBossNpc"},
			[5] = {excel = "Npc/Npc.xlsx" , sheet = "TicketBossNpc"},
			[6] = {excel = "Npc/Npc.xlsx" , sheet = "CompeteNpc"},
			[7] = {excel = "Npc/Npc.xlsx" , sheet = "SingleGateNpc"},
			[8] = {excel = "Npc/Npc.xlsx" , sheet = "PubSceneFightNpc"},
			[9] = {excel = "Npc/Npc.xlsx" , sheet = "TailBeastNpc"},
		}
	},
	[3] = { name = "RefresNpc.ini" , subdir = "npc" , type = 1,
		step = {
			[1] = {excel = "Npc/RefresNpc.xlsx" , sheet = "staticnpc"},
		}
	},
	[4] = { name = "LevelExp.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/RoleConfig.xlsx" , sheet = "role"},
			[2] = {excel = "Role/RoleConfig.xlsx" , sheet = "levelexp"},
		}
	},
	[5] = {
		name = "LevelPoint.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/RoleConfig.xlsx" , sheet = "levelpoint"},
			[2] = {excel = "Role/RoleConfig.xlsx" , sheet = "skillpoint"},
			[3] = {excel = "Role/RoleConfig.xlsx" , sheet = "pointconfig"},
		}
	},
	[6] = {
		name = "RoleInitProperty.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/RoleBase.xlsx" , sheet = "InitProperty"},
		}
	},
	[7] = {
		name = "item.ini" , subdir = "item" , type = 0,
		step = {
			[1] = {excel = "Item/Item.xlsx" , 		sheet = "toolitem"},
			[2] = {excel = "Item/Item.xlsx" , 		sheet = "taskitem"},
			[3] = {excel = "Item/Item.xlsx" , 		sheet = "jewelitem"},
			[4] = {excel = "Item/Item.xlsx" , 		sheet = "cropitem"},
			[5] = {excel = "Pet/PetItem.xlsx" , 	sheet = "PetItem"},
			[6] = {excel = "Pet/PetItem.xlsx" , 	sheet = "PetReel"},
			[7] = {excel = "Equip/Equip.xlsx" , 	sheet = "equipitem"},
			[8] = {excel = "Item/Item.xlsx" , 		sheet = "pharmacyitem"},
			[9] = {excel = "Item/Item.xlsx" , 		sheet = "debrisitem"},
			[10] = {excel = "Equip/Equip.xlsx" , 	sheet = "avataritem"},
			[11] = {excel = "Item/Item.xlsx" , 		sheet = "skillbook"},
			[12] = {excel = "Item/Item.xlsx" , 		sheet = "composemethoditem"},
			[13] = {excel = "Item/Item.xlsx" , 		sheet = "giftbagitem"},
			[14] = {excel = "Item/Item.xlsx" , 		sheet = "fooditem"},
			[15] = {excel = "Equip/Equip.xlsx" ,  sheet = "magicitem"},
			[16] = {excel = "Item/Item.xlsx" , 		sheet = "freetimesitem"},
			[17] = {excel = "Item/Item.xlsx" , 		sheet = "effortitem"},
			[18] = {excel = "Item/Item.xlsx" , 		sheet = "diceitem"},
			[19] = {excel = "Item/Item.xlsx" , 		sheet = "titleitem"},
			[20] = {excel = "Item/Item.xlsx" , 		sheet = "impressitem"},
			[21] = {excel = "Item/Item.xlsx" , 		sheet = "impressrateitem"},
			[22] = {excel = "Item/Item.xlsx" , 		sheet = "HomeEgg"},
			[23] = {excel = "Item/Item.xlsx" , 		sheet = "carditem"},
			[24] = {excel = "Item/Item.xlsx" , 		sheet = "TailBeastItem"},
		}
	},
	[8] = {
		name = "fight.ini" , subdir = "fight" , type = 3,
		step = {
			[1] = {excel = "Fight/Fight.xlsx" , sheet = "fight"},
		}
	},
	[9] = {
		name = "skill.ini" , subdir = "skill" , type = 0,
		step = {
			[1] = {excel = "Skill/Skill.xlsx" , sheet = "主动技能"},
			[2] = {excel = "Skill/Skill.xlsx" , sheet = "被动技能"},
			[3] = {excel = "Skill/Skill.xlsx" , sheet = "触发技能"},
		}
	},
	[10] = {
		name = "skilladd.ini" , subdir = "skill" , type = 4,
		step = {
			[1] = {excel = "Skill/Skill.xlsx" , sheet = "skilladd"},
		}
	},
	[11] = {
		name = "interaction.ini" , subdir = "interaction" , type = 3,
		step = {
			[1] = {excel = "Interaction/Interaction.xlsx" , sheet = "interaction"},
		}
	},
	[12] = {
		name = "FightBuff.ini" , subdir = "skill" , type = 0,
		step = {
			[1] = {excel = "Skill/buff.xlsx" , sheet = "FightBuff"},
		}
	},
	[13] = {
		name = "buffadd.ini" , subdir = "skill" , type = 4,
		step = {
			[1] = {excel = "Skill/buff.xlsx" , sheet = "buffadd"},
		}
	},
	[14] = {
		name = "Task.ini" , subdir = "task" , type = 0,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "Task"},

		}
	},
	[15] = {
		name = "SubTask.ini" , subdir = "task" , type = 5,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "SubTask"},
		}
	},
	[16] = {
		name = "TaskMonsterDrop.ini" , subdir = "task" , type = 5,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "TaskMonsterDrop"},
		}
	},
	[17] = {
		name = "TaskRewardItems.ini" , subdir = "task" , type = 5,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "TaskRewardItems"},
		}
	},
	[18] = { name = "scenequeue.ini" , subdir = "scene" , type = 1,
		step = {
			[1] = {excel = "Scene/Scene.xlsx" , sheet = "scenequeue"},
		}
	},
	[19] = { name = "npcrecordvalue.ini" , subdir = "npc" , type = 1,
		step = {
			[1] = {excel = "Npc/NpcRecord.xlsx" , sheet = "record"},
			[2] = {excel = "Npc/NpcRecord.xlsx" , sheet = "record1"},
		}
	},
	[20] = { name = "npcrecord.ini" , subdir = "npc" , type = 0,
		step = {
			[1] = {excel = "Npc/Npc.xlsx" , sheet = "funnpcrec"},
			[2] = {excel = "Npc/Npc.xlsx" , sheet = "normalnpcrec"},
			[3] = {excel = "Npc/Npc.xlsx" , sheet = "TicketBossNpcRec"},
		}
	},
	[21] = { name = "compete.ini" , subdir = "compete" , type = 3,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "compete"},
		}
	},
	[22] = { name = "competerank.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "rank"},
		}
	},
	[23] = { name = "competenpc.ini" , subdir = "compete" , type = 1,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "competenpc"},
		}
	},
    [24] = {
		name = "RoleAutoAction.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/RoleAutoAction.xlsx" , sheet = "RoleAutoAction"},
		}
	},
	[25] = {
		name = "AddProp.ini" , subdir = "Equip" , type = 4,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipaddprop"},
		}
	},
	[26] = {
		name = "IdentifyPropLib.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "identifyproplib"},
		}
	},
	[27] = {
		name = "EquipIdentifyProp.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipidentifyprop"},
		}
	},
	[28] = {
		name = "AvatarAddSkill.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "avataraddskill"},
		}
	},
	[29] = {
		name = "SuitProp.ini" , subdir = "Equip" , type = 5,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "suitprop"},
		}
	},
	[30] = {
		name = "EquipIdentifyIDList.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipidentifyidlist"},
		}
	},
	[31] = {
		name = "AvatarAffectSkill.ini" , subdir = "Equip" , type = 5,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "avataraffectskill"},
		}
	},

	[32] = { name = "sceneswitchrule.ini" , subdir = "scene" , type = 0,
	step = {
		[1] = {excel = "Scene/Scene.xlsx" , sheet = "sceneswitchrule"},
	}
	},
	[33] = { name = "npcbox.ini" , subdir = "commerce" , type = 0,
	step = {
		[1] = {excel = "Commerce/NpcBox.xlsx" , sheet = "npcbox"},
	}
	},
	[34] = { name = "npcboxitem.ini" , subdir = "commerce" , type = 1,
	step = {
		[1] = {excel = "Commerce/NpcBox.xlsx" , sheet = "npcboxitem"},
	}
	},
	[35] = { name = "refreshcontainer.ini" , subdir = "commerce" , type = 0,
	step = {
		[1] = {excel = "Commerce/RefreshItemContainer.xlsx" , sheet = "refreshcontainer"},
	}
	},
	[36] = { name = "refreshitems.ini" , subdir = "commerce" , type = 1,
	step = {
		[1] = {excel = "Commerce/RefreshItemContainer.xlsx" , sheet = "refreshitems"},
	}
	},

	[37] = {
		name = "PetCfg.ini" , subdir = "pet" , type = 3,
		step = {
			[1] = {excel = "pet/PetExp.xlsx" , sheet = "PetExp"},
			[2] = {excel = "pet/PetExp.xlsx" , sheet = "PetMaxLevel"},
		}
	},
	[38] = { name = "itemrecordvalue.ini" , subdir = "item" , type = 1,
		step = {
			[1] = {excel = "Item/ItemRecord.xlsx" , sheet = "record"},
		}
	},

--	[39] = {
--		name = "PetSkillDepot.ini" , subdir = "pet" , type = 4,
--		step = {
--			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetSkill"},
--		}
--	},

	[39] = {
		name = "PetActCapital.ini" , subdir = "pet" , type = 3,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetActCapital"},
		}
	},

	[40] = {
		name = "UpSkilCfg.ini" , subdir = "skill" , type = 0,
		step = {
			[1] = {excel = "Skill/UpSkillCfg.xlsx" , sheet = "UpSkillCfg"},
		}
	},

	[41] = {
		name = "PetSrcPro.ini" , subdir = "pet" , type = 0,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetSrcPro"},
		}
	},
	[42] = {
		name = "nationscene.ini" , subdir = "scene" , type = 0,
		step = {
			[1] = {excel = "Scene/Scene.xlsx" , sheet = "nationscene"},
		}
	},
	[43] = { name = "RoleOutSearch.ini" , subdir = "role" , type = 0,
	step = {
		[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "RoleOutSearch"},
	}
	},
	[44] = { name = "BossFactory.ini" , subdir = "role" , type = 5,
	step = {
		[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "BossFactory"},
              }
	},
       [45] = { name = "BabyFactory.ini" , subdir = "role" , type = 5,
	step = {
		[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "BabyFactory"},
              }
	},
       [46] = { name = "ItemFactory.ini" , subdir = "role" , type = 5,
	step = {
		[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "ItemFactory"},
              }
	},
       [47] = { name = "GameFactory.ini" , subdir = "role" , type = 4,
	step = {
		[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "GameFactory"},
              }
	},
	[48] = { name = "SystemInitMail.ini" , subdir = "Mail" , type = 0,
	step = {
		[1] = {excel = "Mail/Mail.xlsx" , sheet = "SystemInitMail"},
              }
	},
	[49] = { name = "OutSearchCommon.ini" , subdir = "role" , type = 0,
	step = {
		[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "OutSearchCommon"},
              }
	},
       [50] = { name = "AutoAttack.ini" , subdir = "role" , type = 0,
	step = {
		[1] = {excel = "Role/RoleAutoAttack.xlsx" , sheet = "AutoAttack"},
              }
	},
	[51] = { name = "AutoAttackCommon.ini" , subdir = "role" , type = 0,
	step = {
		[1] = {excel = "Role/RoleAutoAttack.xlsx" , sheet = "AutoAttackCommon"},
    }
	},
	[52] = {
		name = "SlaveCfg.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "Home/SlaveCfg.xlsx" , sheet = "SlaveConfig"},
		}
	},
	[53] = {
		name = "DropLib.ini" , subdir = "Drop" , type = 0,
		step = {
			[1] = {excel = "Drop/Drop.xlsx" , sheet = "DropLib"},
		}
	},
	[54] = {
		name = "DropItemLib.ini" , subdir = "Drop" , type = 5,
		step = {
			[1] = {excel = "Drop/Drop.xlsx" , sheet = "DropItemLib"},
		}
	},
	[55] = {
		name = "EventDrop.ini" , subdir = "Drop" , type = 0,
		step = {
			[1] = {excel = "Drop/Drop.xlsx" , sheet = "EventDrop"},
		}
	},
	[56] = {
		name = "GardenCfg.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "Home/GardenCfg.xlsx" , sheet = "GardenConfig"},
			[2] = {excel = "Home/GardenCfg.xlsx" , sheet = "PioneerCapital"},
			[3] = {excel = "Home/GardenCfg.xlsx" , sheet = "GardenLevCfg"},
			[4] = {excel = "Home/GardenCfg.xlsx" , sheet = "GaedenSceneId"},
		}
	},

	[57] = {
		name = "DepotCfg.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "Home/DepotCfg.xlsx" , sheet = "ActiveCapital"},
			[2] = {excel = "Home/DepotCfg.xlsx" , sheet = "MaxCapital"},
		}
	},
	[58] = {
		name = "EquipCompose.ini" , subdir = "Equip" , type = 4,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipcompose"},
		}
	},
	[59] = {
		name = "EquipCommon.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipcommon"},
		}
	},

	[60] = {
		name = "BedroomCfg.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/BedroomCfg.xlsx" , sheet = "BedCfg"},
		}
	},
       [61] = {
		name = "EquipComposeRand.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipcomposerand"},
		}
	},

	[62] = {
		name = "WorkShopCfg.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "Home/WorkShopCfg.xlsx" , sheet = "UpgradeCapital"},
			[2] = {excel = "Home/WorkShopCfg.xlsx" , sheet = "SaleAdd"},
			[3] = {excel = "Home/WorkShopCfg.xlsx" , sheet = "MaxLevel"},
			[4] = {excel = "Home/WorkShopCfg.xlsx" , sheet = "TransCrop"},
		}
	},

	[63] = {
		name = "LaborNpc.ini" , subdir = "home" , type = 1,
		step = {
			[1] = {excel = "Home/LaborCfg.xlsx" , sheet = "LaborNpc"},
		}
	},

	[64] = { name = "LaborLev.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/LaborCfg.xlsx" , sheet = "Level"},
		}
	},

	[65] = { name = "HomePetCfg.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/PetCfg.xlsx" , sheet = "Config"},
		}
	},

	[66] = {
		name = "HomeCfg.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "home/HomeCfg.xlsx" , sheet = "Exp"},
			[2] = {excel = "home/HomeCfg.xlsx" , sheet = "Capital"},
		}
	},

	[67] = {
  	name = "KeyFactory.ini" , subdir = "role" , type = 5,
		step = {
			[1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "KeyFactory"},
              }
	},

	[68] = {
		name = "avatarclothingmap.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "avatarclothingmap"},
		}
	},
	[69] = {
		name = "competeprize.ini" , subdir = "compete" , type = 1,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "prize"},
		}
	},
	[70] = {
		name = "Chat.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/Chat.xlsx" , sheet = "chat"},
		}
	},
	[71] = {
		name = "NationUpSkill.ini" , subdir = "skill" , type = 0,
		step = {
			[1] = {excel = "Skill/UpSkillCfg.xlsx" , sheet = "NationUpSkill"},
		}
	},
	[72] = {
		name = "TaskPropCfg.ini" , subdir = "task" , type = 3,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "DayTaskPropConfig"},
		}
	},
	[73] = {
		name = "DayTaskFlushCount.ini" , subdir = "task" , type = 0,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "DayTaskFlushCount"},
		}
	},
	[74] = {
		name = "Look.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/Look.xlsx" , sheet = "Show"},
		}
	},
	[75] = {
		name = "GardenActiveItem.ini" , subdir = "home" , type = 1,
		step = {
			[1] = {excel = "Home/GardenCfg.xlsx" , sheet = "ActiveItem"},
		}
	},
	[76] = {
		name = "SlaveCount.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/SlaveCfg.xlsx" , sheet = "CountCfg"},
		}
	},
	[77] = {
		name = "UnFightBuff.ini" , subdir = "skill" , type = 0,
		step = {
			[1] = {excel = "Skill/buff.xlsx" , sheet = "UnFightBuff"},
		}
	},
	[78] = {
		name = "SlaveInter.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/SlaveCfg.xlsx" , sheet = "Inter"},
		}
	},
	[79] = {
		name = "ActivePackCost.ini" , subdir = "Box" , type = 5,
		step = {
			[1] = {excel = "Box/Box.xlsx" , sheet = "ActivePackCost"},
		}
	},
	[80] = {
		name = "BoxConfig.ini" , subdir = "Box" , type = 0,
		step = {
			[1] = {excel = "Box/Box.xlsx" , sheet = "BoxConfig"},
		}
	},
	[81] = {
		name = "ExceptTaskScene.ini" , subdir = "task" , type = 0,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "ExceptTaskScene"},
		}
	},
	[82] = {
		name = "TollgateCloneScene.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "TollgateCloneScene"},
		}
	},
	[83] = {
		name = "TollGate.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "TollGate"},
		}
	},
	[84] = {
		name = "SubTollGate.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "SubTollGate"},
		}
	},
	[85] = {
		name = "FightMonsterPoint.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "FightMonsterPoint"},
		}
	},
	[86] = {
		name = "MonsterGroup.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "MonsterGroup"},
		}
	},
	[87] = {
		name = "RankExpReward.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "RankExpReward"},
		}
	},
	[88] = {
		name = "RankItemReward.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "RankItemReward"},
		}
	},
	[89] = {
		name = "RankMoneyReward.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "RankMoneyReward"},
		}
	},
	[90] = {
		name = "TollGatePropConfig.ini" , subdir = "scene/clonescene" , type = 3,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "TollGatePropConfig"},
		}
	},
  [91] = { name = "RefresHeartNpc.ini" , subdir = "npc" , type = 1,
		step = {
			[1] = {excel = "Npc/RefresNpc.xlsx" , sheet = "heartnpc"},
		}
	},
	[92] = { name = "equipeffectskilllib.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipeffectskilllib"},
		}
	},
	[93] = { name = "prizemachine.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "prizemachine"},
		}
	},
	[94] = { name = "worldcup.ini" , subdir = "compete" , type = 3,
		step = {
			[1] = {excel = "Compete/WorldCup.xlsx" , sheet = "worldcup"},
		}
	},
  [95] = { name = "GostFactory.ini" , subdir = "role" , type = 4,
   step = {
     [1] = {excel = "Role/RoleOutSearch.xlsx" , sheet = "GostFactory"},
    }
	},
  [96] = { name = "NationMatchOrder.ini" , subdir = "compete" , type = 0,
   step = {
     [1] = {excel = "Compete/Compete.xlsx" , sheet = "NationMatchOrder"},
    }
	},
	[97] = { name = "gm.ini" , subdir = "gm" , type = 3,
   step = {
     [1] = {excel = "Gm/gm.xlsx" , sheet = "gm"},
    }
	},
  [98] = { name = "NationMatchTime.ini" , subdir = "compete" , type = 0,
   step = {
     [1] = {excel = "Compete/Compete.xlsx" , sheet = "NationMatchTime"},
    }
	},
  [99] = { name = "NationMatchPrize.ini" , subdir = "compete" , type = 0,
   step = {
     [1] = {excel = "Compete/Compete.xlsx" , sheet = "NationMatchPrize"},
    }
	},
	[100] = { name = "MailPropConfig.ini" , subdir = "Mail" , type = 3,
	   step = {
			[1] = {excel = "Mail/Mail.xlsx" , sheet = "MailPropConfig"},
		}
	},
	[101] = { name = "Adult.ini" , subdir = "role" , type = 3,
	   step = {
			[1] = {excel = "Role/Adult.xlsx" , sheet = "adult"},
		}
	},
	[102] = {
		name = "TollGateLobbyScene.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "TollGateLobbyScene"},
		}
	},
	[103] = {
		name = "BlackName.ini" , subdir = "black" , type = 1,
		step = {
			[1] = {excel = "Black/Black.xlsx" , sheet = "black"},
		}
	},
	[104] = {
		name = "EquipPropDefine.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "EquipPropDefine"},
		}
	},
	[105] = {
		name = "explevelmul.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/RoleConfig.xlsx" , sheet = "explevelmul"},
		}
	},
	[106] = {
		name = "SingleGateConfig.ini" , subdir = "scene/singlegate" , type = 3,
		step = {
			[1] = {excel = "Scene/SingleGate.xlsx" , sheet = "Config"},
		}
	},
	[107] = {
		name = "SingleGateInfo.ini" , subdir = "scene/singlegate" , type = 0,
		step = {
			[1] = {excel = "Scene/SingleGate.xlsx" , sheet = "GateInfo"},
		}
	},
	[108] = { name = "gift.ini" , subdir = "role" , type = 0,
	step = {
		[1] = {excel = "Role/Gift.xlsx" , sheet = "gift"},
	}
	},
	[109] = { name = "giftitem.ini" , subdir = "role" , type = 1,
	step = {
		[1] = {excel = "Role/Gift.xlsx" , sheet = "giftitem"},
	}
	},
	[110] = { name = "card.ini" , subdir = "role" , type = 0,
	step = {
		[1] = {excel = "Role/Gift.xlsx" , sheet = "card"},
	}
	},
	[111] = { name = "top.ini" , subdir = "role" , type = 3,
	step = {
		[1] = {excel = "Role/Top.xlsx" , sheet = "top"},
		}
	},
	[112] = {
		name = "PetGrow.ini" , subdir = "pet" , type = 3,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetGrow"},
		}
	},
	[113] = {
		name = "virtualshop.ini" , subdir = "commerce" , type = 0,
		step = {
			[1] = {excel = "Commerce/VirtualShop.xlsx" , sheet = "virtualshop"},
		}
	},
	[114] = {
		name = "SingleFloorCfg.ini" , subdir = "scene/singlegate" , type = 0,
		step = {
			[1] = {excel = "Scene/SingleGate.xlsx" , sheet = "FloorCfg"},
		}
	},
	[115] = {
		name = "relive.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/Relive.xlsx" , sheet = "relive"},
		}
	},
	[116] = {
		name = "UpSkillLimit.ini" , subdir = "skill" , type = 0,
		step = {
			[1] = {excel = "Skill/UpSkillCfg.xlsx" , sheet = "UpSkillLimit"},
		}
	},
	[117] = {
		name = "equipPropConfig.ini" , subdir = "Equip" , type = 3,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "equipPropConfig"},
		}
	},
	[118] = {
		name = "ConsolidateFailRate.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "ConsolidateFailRate"},
		}
	},
	[119] = {
		name = "FixedDropLib.ini" , subdir = "Drop" , type = 5,
		step = {
			[1] = {excel = "Drop/Drop.xlsx" , sheet = "FixedDropLib"},
		}
	},
	[120] = { name = "scoreprize.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "ScorePrize"},
		}
	},
	[121] = { name = "HonorExp.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Compete.xlsx" , sheet = "HonorExp"},
		}
	},
	[122] = { name = "MagicPropLib.ini" , subdir = "Equip" , type = 5,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "magicproplib"},
		}
	},
	[123] = { name = "PubFightMonsterConfig.ini" , subdir = "scene/pubfightmonster" , type = 3,
		step = {
			[1] = {excel = "Scene/PubFightMonster.xlsx" , sheet = "PubFightMonsterConfig"},
		}
	},
	[124] = { name = "PubSceneFightInfo.ini" , subdir = "scene/pubfightmonster" , type = 0,
		step = {
			[1] = {excel = "Scene/PubFightMonster.xlsx" , sheet = "PubSceneFightInfo"},
		}
	},
	[125] = { name = "PubMonsterLibID.ini" , subdir = "scene/pubfightmonster" , type = 5,
		step = {
			[1] = {excel = "Scene/PubFightMonster.xlsx" , sheet = "PubMonsterLibID"},
		}
	},
	[126] = { name = "PubMonsterDropLib.ini" , subdir = "scene/pubfightmonster" , type = 0,
		step = {
			[1] = {excel = "Scene/PubFightMonster.xlsx" , sheet = "PubMonsterDropLib"},
		}
	},
	[127] = {
		name = "RoomInfo.ini" , subdir = "interaction" , type = 0,
		step = {
			[1] = {excel = "Interaction/Train.xlsx" , sheet = "roominfo"},
		}
	},
	[128] = {
		name = "GroupInfo.ini" , subdir = "interaction" , type = 0,
		step = {
			[1] = {excel = "Interaction/Train.xlsx" , sheet = "groupinfo"},
		}
	},
	[129] = {
		name = "TrainExp.ini" , subdir = "interaction" , type = 0,
		step = {
			[1] = {excel = "Interaction/Train.xlsx" , sheet = "exp"},
		}
	},
	[130] = {
		name = "PubMonsterRewardRule.ini" , subdir = "scene/pubfightmonster" , type = 0,
		step = {
			[1] = {excel = "Scene/PubFightMonster.xlsx" , sheet = "PubMonsterRewardRule"},
		}
	},
	[131] = {
		name = "DayTaskLevelLib.ini" , subdir = "task" , type = 0,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "DayTaskLevelLib"},
		}
	},
	[132] = {
		name = "TrainItemLib.ini" , subdir = "interaction" , type = 4,
		step = {
			[1] = {excel = "Interaction/Train.xlsx" , sheet = "itemlib"},
		}
	},
	[133] = {
		name = "TrainConfig.ini" , subdir = "interaction" , type = 3,
		step = {
			[1] = {excel = "Interaction/Train.xlsx" , sheet = "config"},
		}
	},
	[134] = {
		name = "TaskBroadCastItem.ini" , subdir = "task" , type = 0,
		step = {
			[1] = {excel = "Task/Task.xlsx" , sheet = "TaskBroadCastItem"},
		}
	},
	[135] = {
		name = "findfriend.ini" , subdir = "interaction" , type = 3,
		step = {
			[1] = {excel = "Interaction/FindFriend.xlsx" , sheet = "findfriend"},
		}
	},
--	[136] = {
--		name = "NewPetCfg.ini" , subdir = "pet" , type = 0,
--		step = {
--			[1] = {excel = "pet/PetItem.xlsx" , sheet = "NewPetCfg"},
--		}
--	},
	[136] = {
		name = "PetFeedLib.ini" , subdir = "pet" , type = 4,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetFeedLib"},
		}
	},
	[137] = {
		name = "RewardFood.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/Active.xlsx" , sheet = "rewardfood"},
		}
	},
	[138] = {
		name = "OrangeGift.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/Active.xlsx" , sheet = "orangeGift"},
		}
	},
	[139] = {
		name = "PharmacyItemReward.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/Active.xlsx" , sheet = "PharmacyItemReward"},
		}
	},
	[140] = {
		name = "ActiveConfig.ini" , subdir = "active" , type = 3,
		step = {
			[1] = {excel = "Active/Active.xlsx" , sheet = "ActiveConfig"},
		}
	},
	[141] = {
		name = "PetSkillCnt.ini" , subdir = "pet" , type = 3,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetSkillCnt"},
		}
	},
	[142] = {
		name = "Title.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/RoleConfig.xlsx" , sheet = "title"},
		}
	},
	[143] = {
		name = "PetSkillSrc.ini" , subdir = "pet" , type = 0,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetSkillSrc"},
		}
	},
	[144] = {
		name = "PetSkillLib.ini" , subdir = "pet" , type = 0,
		step = {
			[1] = {excel = "pet/PetItem.xlsx" , sheet = "PetSkillLib"},
		}
	},
	[145] = {
		name = "DayGoalScore.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/DayGoal.xlsx" , sheet = "DayGoalScore"},
		}
	},
	[146] = {
		name = "RewardLevel.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/DayGoal.xlsx" , sheet = "RewardLevel"},
		}
	},
	[147] = {
		name = "RewardRate.ini" , subdir = "active" , type = 3,
		step = {
			[1] = {excel = "Active/DayGoal.xlsx" , sheet = "RewardRate"},
		}
	},
	[148] = {
		name = "WeekReward.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/DayGoal.xlsx" , sheet = "WeekReward"},
		}
	},
	[149] = {
		name = "OfflinePrize.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/DayGoal.xlsx" , sheet = "OfflinePrize"},
		}
	},
	[150] = {
		name = "Effort.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/RoleEffort.xlsx" , sheet = "Effort"},
		}
	},
	[151] = {
		name = "avatarcollect.ini" , subdir = "Equip" , type = 3,
		step = {
			[1] = {excel = "Equip/AvatarCollect.xlsx" , sheet = "avatarcollect"},
		}
	},
	[152] = {
		name = "orangecollect.ini" , subdir = "Equip" , type = 1,
		step = {
			[1] = {excel = "Equip/AvatarCollect.xlsx" , sheet = "orange"},
		}
	},
	[153] = {
		name = "bulecollect.ini" , subdir = "Equip" , type = 1,
		step = {
			[1] = {excel = "Equip/AvatarCollect.xlsx" , sheet = "bule"},
		}
	},
	[154] = {
		name = "jreacollect.ini" , subdir = "Equip" , type = 1,
		step = {
			[1] = {excel = "Equip/AvatarCollect.xlsx" , sheet = "jrea"},
		}
	},
	[155] = {
		name = "jreacollectadd.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvatarCollect.xlsx" , sheet = "avataradd"},
		}
	},
	[156] = {
		name = "avataraddday.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvatarCollect.xlsx" , sheet = "avataraddday"},
		}
	},
	[157] = {
		name = "MysticNpcLib.ini" , subdir = "commerce" , type = 0,
		step = {
			[1] = {excel = "Commerce/MysticShop.xlsx" , sheet = "MysticNpcLib"},			
		}
	},	
	[158] = {
		name = "MysticItemLib.ini" , subdir = "commerce" , type = 1,
		step = {
			[1] = {excel = "Commerce/MysticShop.xlsx" , sheet = "MysticItemLib"},			
		}
	},	
	[159] = {
		name = "MysticNpcTime.ini" , subdir = "commerce" , type = 0,
		step = {
			[1] = {excel = "Commerce/MysticShop.xlsx" , sheet = "MysticNpcTime"},			
		}
	},		
	[160] = {
		name = "MysticNpcLocation.ini" , subdir = "commerce" , type = 1,
		step = {
			[1] = {excel = "Commerce/MysticShop.xlsx" , sheet = "MysticNpcLocation"},			
		}
	},
	[161] = {
		name = "MysticCfg.ini" , subdir = "commerce" , type = 3,
		step = {
			[1] = {excel = "Commerce/MysticShop.xlsx" , sheet = "MysticBuyCnt"},			
		}
	},
	[162] = {
		name = "TGCardDropId.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/TGCard.xlsx" , sheet = "TGCardDropId"},			
		}
	},
	[163] = {
		name = "TGCardDropLib.ini" , subdir = "scene/clonescene" , type = 5,
		step = {
			[1] = {excel = "Scene/TGCard.xlsx" , sheet = "TGCardDropLib"},			
		}
	},
	[164] = {
		name = "TGCardConfig.ini" , subdir = "scene/clonescene" , type = 3,
		step = {
			[1] = {excel = "Scene/TGCard.xlsx" , sheet = "TGCardCfg"},
		}
	},
	[165] = {
		name = "CardsScore.ini" , subdir = "role" , type = 0,
		step = {
			[1] = {excel = "Role/TurnCard.xlsx" , sheet = "CardsScore"},
		}
	},
	[166] = {
		name = "CardTypeRate.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/TurnCard.xlsx" , sheet = "CardTypeRate"},
		}
	},
	[167] = {
		name = "TrunCardDopType.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/TurnCard.xlsx" , sheet = "TrunCardDopType"},
		}
	},
	[168] = {
		name = "TurnCardProp.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/TurnCard.xlsx" , sheet = "TurnCardProp"},
		}
	},
	[169] = {
		name = "RingExChange.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "RingExChange"},
		}
	},
	[170] = {
		name = "BuildPos.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "BuildPos"},
		}
	},	
	[171] = {
		name = "BuildInfo.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "BuildInfo"},
		}
	},	
	[172] = {
		name = "AdornPos.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "AdornPos"},
		}
	},	
	[173] = {
		name = "AdornInfo.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "AdornInfo"},
		}
	},	
	[174] = {
		name = "HomeEgg.ini" , subdir = "home" , type = 4,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "HomeEgg"},
		}
	},
	[175] = {
		name = "IncubateCfg.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "IncubateCfg"},
		}
	},	
	[176] = {
		name = "HomeDepotCfg.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "HomeDepot"},
		}
	},
	[177] = {
		name = "HomeAllCfg.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "HomeAllCfg"},
		}
	},
	[178] = {
		name = "HomeWide.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "HomeWide"},
		}
	},				
	[179] = {
		name = "WeedInfo.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "WeedInfo"},
		}
	},			
	[180] = {
		name = "OutputInfo.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "OutputInfo"},
		}
	},		
	[181] = {
		name = "TaskBoard.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/TaskBoardCfg.xlsx" , sheet = "TaskBoard"},
		}
	},
	[182] = {
		name = "BoardLevel.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/TaskBoardCfg.xlsx" , sheet = "BoardLevel"},
		}
	},
	[183] = {
		name = "TaskBoardProp.ini" , subdir = "home" , type = 3,
		step = {
			[1] = {excel = "Home/TaskBoardCfg.xlsx" , sheet = "TaskBoardProp"},
		}
	},
	[184] = {
		name = "VisitorBoard.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/VisitorBoardCfg.xlsx" , sheet = "VisitorBoard"},
		}
	},
	[185] = {
		name = "FarmGrain.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "FarmGrain"},
		}
	},	
	[186] = {
		name = "WindMillGrain.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "WindMillGrain"},
		}
	},	
	[187] = {
		name = "InitBuild.ini" , subdir = "home" , type = 0,
		step = {
			[1] = {excel = "Home/Home.xlsx" , sheet = "InitBuild"},
		}
	},
	[188] = {
		name = "CaptianMul.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "CaptianMul"},
		}
	},	
	[189] = {
		name = "ExchangeMagicBox.ini" , subdir = "scene/clonescene" , type = 0,
		step = {
			[1] = {excel = "Scene/CloneScene.xlsx" , sheet = "ExchangeMagicBox"},
		}
	},	
	[190] = {
		name = "ActiveStoreHouseCost.ini" , subdir = "Box" , type = 0,
		step = {
			[1] = {excel = "Box/Box.xlsx" , sheet = "ActiveStoreHouseCost"},
		}
	},
	[191] = {
		name = "ImpressRate.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "ImpressRate"},
		}
	},
	[192] = {
		name = "changeequip.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvaterChange.xlsx" , sheet = "changeequip"},
		}
	},
	[193] = {
		name = "TreasureScore.ini" , subdir = "active" , type = 3,
		step = {
			[1] = {excel = "Active/TreasureCfg.xlsx" , sheet = "TreasureScore"},
		}
	},
	[194] = {
		name = "TreasureType.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/TreasureCfg.xlsx" , sheet = "TreasureType"},
		}
	},
	[195] = {
		name = "TreasureProp.ini" , subdir = "active" , type = 3,
		step = {
			[1] = {excel = "Active/TreasureCfg.xlsx" , sheet = "TreasureProp"},
		}
	},
	[196] = {
		name = "TreasureRole.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/TreasureCfg.xlsx" , sheet = "TreasureRole"},
		}
	},
	[197] = {
		name = "advanced.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvaterChange.xlsx" , sheet = "advanced"},
		}
	},
	[198] = {
		name = "advancedconfig.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvaterChange.xlsx" , sheet = "changevalue"},
		}
	},
	[199] = {
		name = "changeitem.ini" , subdir = "Equip" , type = 3,
		step = {
			[1] = {excel = "Equip/AvaterChange.xlsx" , sheet = "changeitem"},
		}
	},
	[200] = {
		name = "leiTaiConfig.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Server_LeiTai.xlsx" , sheet = "LeiTai_config"},
		}
	},
	[201] = {
		name = "levelTab.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Server_LeiTai.xlsx" , sheet = "LeiTai_Level"},
		}
	},
	[202] = {
		name = "leitaiDrop.ini" , subdir = "compete" , type = 0,
		step = {
			[1] = {excel = "Compete/Server_LeiTai.xlsx" , sheet = "LeiTai_Drop"},
		}
	},
	[203] = {
		name = "AvatarRecast.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvatarRecast.xlsx" , sheet = "AvatarRecast"},
		}
	},
	[204] = {
		name = "AvatarRecastBaseLib.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/AvatarRecast.xlsx" , sheet = "AvatarRecastBaseLib"},
		}
	},
	[205] = {
		name = "AvatarRecastCfg.ini" , subdir = "Equip" , type = 3,
		step = {
			[1] = {excel = "Equip/AvatarRecast.xlsx" , sheet = "AvatarRecastCfg"},
		}
	},
	
	[206] = {
		name = "EquipInscribe.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "EquipInscribe"},
		}
	},
	[207] = {
		name = "SealOdds.ini" , subdir = "Equip" , type = 3,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "SealOdds"},
		}
	},
	[208] = {
		name = "cardMenu.ini" , subdir = "cardhome" , type = 0,
		step = {
			[1] = {excel = "CardHome/card.xlsx" , sheet = "Menu"},
		}
	},
	[209] = {
		name = "cardType.ini" , subdir = "cardhome" , type = 0,
		step = {
			[1] = {excel = "CardHome/card.xlsx" , sheet = "CardType"},
		}
	},
	[210] = {
		name = "card.ini" , subdir = "cardhome" , type = 0,
		step = {
			[1] = {excel = "CardHome/card.xlsx" , sheet = "Card"},
		}
	},
	[211] = {
		name = "prizeItem.ini" , subdir = "cardhome" , type = 0,
		step = {
			[1] = {excel = "CardHome/card.xlsx" , sheet = "PrizeItem"},
		}
	},
	[212] = {
		name = "cardTab.ini" , subdir = "cardhome" , type = 0,
		step = {
			[1] = {excel = "CardHome/card.xlsx" , sheet = "CardTab"},
		}
	},
	[213] = {
		name = "cardConfig.ini" , subdir = "cardhome" , type = 3,
		step = {
			[1] = {excel = "CardHome/card.xlsx" , sheet = "CardConfig"},
		}
	},
	[214] = {
		name = "LastTime.ini" , subdir = "active" , type = 3,
		step = {
			[1] = {excel = "Active/SustainCfg.xlsx" , sheet = "LastTime"},
		}
	},
	[215] = {
		name = "SustainCfg.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/SustainCfg.xlsx" , sheet = "SustainCfg"},
		}
	},
	[216] = {
		name = "ItemCDTimeCfg.ini" , subdir = "item" , type = 0,
		step = {
			[1] = {excel = "item/Item.xlsx" , sheet = "ItemCDTimeCfg"},
		}
	},
	[217] = {
		name = "DragonExchange.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "DragonExchange"},
		}
	},
	[218] = {
		name = "NewHandGift.ini" , subdir = "active" , type = 0,
		step = {
			[1] = {excel = "Active/SustainCfg.xlsx" , sheet = "NewHandGift"},
		}
	},
	[219] = {
		name = "TailBeastGroup.ini" , subdir = "tailbeast" , type = 0,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "TailBeastGroup"},
		}
	},
	[220] = {
		name = "ShapeList.ini" , subdir = "tailbeast" , type = 5,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "ShapeList"},
		}
	},
	[221] = {
		name = "DifficultyLevel.ini" , subdir = "tailbeast" , type = 0,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "DifficultyLevel"},
		}
	},
	[222] = {
		name = "TailBeastList.ini" , subdir = "tailbeast" , type = 0,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "TailBeastList"},
		}
	},
	[223] = {
		name = "EntryOrder.ini" , subdir = "tailbeast" , type = 0,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "EntryOrder"},
		}
	},
	[224] = {
		name = "TopPlayerReward.ini" , subdir = "tailbeast" , type = 0,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "TopPlayerReward"},
		}
	},
	[225] = {
		name = "VillageState.ini" , subdir = "tailbeast" , type = 0,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "VillageState"},
		}
	},
	[226] = {
		name = "TailBeastCfg.ini" , subdir = "tailbeast" , type = 3,
		step = {
			[1] = {excel = "TailBeast/TailBeast.xlsx" , sheet = "TailBeastCfg"},
		}
	},
	[227] = {
		name = "CantComposerItem.ini" , subdir = "Equip" , type = 0,
		step = {
			[1] = {excel = "Equip/Equip.xlsx" , sheet = "CantComposerItem"},
		}
	},
	[228] = {
		name = "giftitemConfig.ini" , subdir = "role" , type = 3,
		step = {
			[1] = {excel = "Role/Gift.xlsx" , sheet = "giftitemConfig"},
		}
	},
};
