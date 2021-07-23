importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//大招, 噱头技能，不影响平衡性
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var SelfAvatarLevel = 0;
    if(self.Clothing != 0)
    {
        SelfAvatarLevel = self.GetInitAvatarLevel();
    }
    else if(self.CounterBombMul != -1)
    {
        SelfAvatarLevel = self.CounterBombMul;
    }
    else
    {
        SelfAvatarLevel = LogicTool.ToInt(self.Level/3) - 5;
    } 
    var TargetAvatarLevel = 0;
    if(target.Clothing != 0)
    {
        TargetAvatarLevel = target.GetInitAvatarLevel();
    }
    else if(target.CounterBombMul != -1)
    {
        TargetAvatarLevel = target.CounterBombMul;
    }
    else
    {
        TargetAvatarLevel = LogicTool.ToInt(target.Level/3) - 5;
    }
    var AvatarGap = SelfAvatarLevel - TargetAvatarLevel;
    var HPCondition = 15;
    if(AvatarGap > 0)
    {
        HPCondition += Math.pow(AvatarGap,1.26);
    }
    var Probability = 10;
    if(AvatarGap > 0)
    {
        Probability += Math.pow(AvatarGap,1.2);
    }
    //代入以上参数计算    
    if((LogicTool.RandInt(0, 99) < Probability)
       &&(target.HP < target.MaxHP*HPCondition*0.01))
    {
        /*
        //+9及以上avatar 50%概率新大招
        if((!(SelfAvatarLevel < 9))&&(LogicTool.RandInt(0, 99) < 50))
        {
            var skill = fightsystem.ChangeSkill(skill,19180,fv);
            return fightsystem.UserSkill(self,target,skill,timer,fv);
        }
        */
        var script_ulti = LogicTool.RandInt(300,500)/100*target.HP;
        fightsystem.Damage(target,script_ulti);
        fv.TargetLastDamage = script_ulti;  
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;      
}