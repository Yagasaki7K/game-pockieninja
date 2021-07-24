importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//直接操作反弹, 跳动+buff.SaveData控制恢复，直接操作强水弱火
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.ReboundAttach += 0;
    buff.SaveData = 0;
    self.SkillAdd1 += 0;
    var target = self.Target;
    target.SkillAdd0 += 0;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    if((LogicTool.RandInt(0, 99) < 20)&&(buff.SaveData1 < 3))
    {
        var Heal = LogicTool.ToInt(self.MaxHP*buff.SaveData*0.01);
        if(self.HP + Heal > self.MaxHP)
        {
            Heal = self.MaxHP - self.HP;
        }
        self.HP += Heal;
        fv.IncHP = Heal;
        buff.SaveData1 += 1;
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    var SkillJianCiHuTi = fightsystem.GetTriggerSkill(self,40082);
    if(SkillJianCiHuTi != null)
    {
        self.ReboundAttach -= 4;
    }   
}
