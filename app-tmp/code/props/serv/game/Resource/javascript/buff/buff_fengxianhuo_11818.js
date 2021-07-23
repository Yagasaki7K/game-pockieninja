importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//凤仙火铺垫
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    buff.SaveData = self.MaxHP-self.HP;      //伤害累积在这里
    buff.SaveData1 = buff.SaveData;          //记录上一次的血量
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
}