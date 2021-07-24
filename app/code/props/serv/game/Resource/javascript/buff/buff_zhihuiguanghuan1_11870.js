importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//buff.SaveData操作免除消耗的概率, 直接操作转化伤害，buff.SaveData1操作提高援助几率
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.SaveData = 0;
    buff.SaveData1 = 0;
    //操作减少消耗和提高援助几率
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    var SkillHuiGuangFanZhao = fightsystem.GetTriggerSkill(self, 40096);
    var BuffHuiGuangFanZhao = fightsystem.GetBuff(self,11887);
    if((SkillHuiGuangFanZhao != null)&&(self.HP < self.MaxHP*0.3)&&(BuffHuiGuangFanZhao == null))
    {
        fightsystem.AddBuff(self,11887,timer,fv,24,0);
    } 
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}