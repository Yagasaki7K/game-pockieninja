/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.TaskModule.TaskInfo);

function RookieStepReward(jssystem, self, task, step)
{
    
}

function GetItemReward(jssystem, self, task, rewardItemList)
{
    if (!task.RewardItem.equals("2"))
    {
        return;
    }

    var kernel = jssystem.GetKernel();

    var Popsinger = kernel.QueryInt(self, PropertyIndex.Popsinger);
    switch (Popsinger){
        case 0:
        {
            var rewardItemInfo = new RewardItemInfo();
            rewardItemInfo.itemCofig = "i140036";
            rewardItemInfo.count = 1;
            rewardItemList.add(rewardItemInfo);
            // rewardItemList.AddString("i140036");
            break;
        }
        case 1:
        {
            var rewardItemInfo = new RewardItemInfo();
            rewardItemInfo.itemCofig = "i140037";
            rewardItemInfo.count = 1;
            rewardItemList.add(rewardItemInfo);
            //rewardItemList.AddString("i140037");
            break;
        }
        case 2:
        {
            var rewardItemInfo = new RewardItemInfo();
            rewardItemInfo.itemCofig = "i140038";
            rewardItemInfo.count = 1;
            rewardItemList.add(rewardItemInfo);
            // rewardItemList.AddString("i140038");
            break;
        }
        case 3:
        {
            break;
        }
        case 4:
        {
            break;
        }
        case 5:
        {
            break;
        }
    }
    return;
}