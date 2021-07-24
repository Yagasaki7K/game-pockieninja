importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//直接操作伤害减免, 直接操作提高反击率，buff.SaveData个位和十位操作消耗增加
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.DecDamage += 0;
    self.CounterMul += 0;
    buff.SaveData = 0;
    self.SkillAdd7 += 0;
    //控制消耗 
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}