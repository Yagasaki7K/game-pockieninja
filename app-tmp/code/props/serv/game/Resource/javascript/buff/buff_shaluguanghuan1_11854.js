importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//个位和十位吸血, 直接操作强体弱幻，个位和十位正面状态攻击
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.VampiricHP += 0;
    buff.SaveData = 0;
    self.SkillAdd5 += 0;
    var target = self.Target;
    target.SkillAdd8 += 0;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    var SkillXueZhou = fightsystem.GetTriggerSkill(self,40078);
    if(SkillXueZhou != null)
    {
        self.VampiricHP -= 4;
    }    
}