importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.TaskModule.TaskInfo);
importPackage(com.d2.serv.game.TaskModule.TaskDefine);


function GetItemReward(jssystem, self, task, rewardItemList)
{

}

function RookieStepReward(jssystem, self, task, step)
{
    var kernel = jssystem.GetKernel();
    switch (step)
            {
        case 1:
        {
            // 奖励经验
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 5);

            // 奖励道具
            var containersystem = jssystem.GetContainerSystem();
            containersystem.AutoPlaceItemToBox(self, "ToolBox", "i160016", 1);

            // 奖励金钱  0:铜币 2：黄金 3：礼券
            var capitalsystem = jssystem.GetCapitalSystem();
            if (capitalsystem.CanIncCapital(self, 0, 100, 13) > 0)
            {
                capitalsystem.IncCapital(self, 0, 100, 13);
            }

            break;
        }
        case 2:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 11);
            break;
        }
        case 3:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 25);
            break;
        }
        case 4:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 5:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 500);
            break;
        }
        case 6:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 7:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 8:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 9:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 10:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 11:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 12:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 13:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 14:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 15:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
        case 16:
        {
            var levelsystem = jssystem.GetLevelSystem();
            levelsystem.AddExp(self, 40);
            break;
        }
    }
}