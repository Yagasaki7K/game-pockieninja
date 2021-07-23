importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//结晶之刃
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 2.6);
    var BreakBonus = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            BreakBonus = 200;
            break;
        }
        case 2: 
        {
            BreakBonus = 200;
            break;
        } 
        case 3: 
        {
            BreakBonus = 200;
            break;
        } 
        case 4: 
        {
            BreakBonus = 200;
            break;
        } 
        case 5: 
        {
            BreakBonus = 200;
            break;
        }
        case 6: 
        {
            BreakBonus = 200;
            break;
        }
        case 7: 
        {
            BreakBonus = 200;
            break;
        } 
        case 8: 
        {
            BreakBonus = 200;
            break;
        }
        case 9: 
        {
            BreakBonus = 200;
            break;
        } 
        case 10: 
        {
            BreakBonus = 200;
            break;
        }
        case 11: 
        {
            BreakBonus = 200;
            break;
        }
        case 12: 
        {
            BreakBonus = 200;
            break;
        }
        case 13: 
        {
            BreakBonus = 200;
            break;
        }      
        default: ;
    }
    BreakBonus = BreakBonus * (1+0.01*LogicTool.ToInt(self.SkillAdd1*0.01));
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        var script_skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,script_skill,timer,fv);
    }
    if(self.MP < MPCost)
    {
        var script_skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,script_skill,timer,fv);
    }
    var AttackDamage = 1;
    var BuffPeg = fightsystem.GetBuff(target,11840);
    //如果有格挡就记录下来
    var BuffParry = fightsystem.GetBuff(target,11841);
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);      
    if((fv.IsHit == 1)&&(BuffPeg == null))
    {   
        //检查重复状态
        var BuffFreeze = fightsystem.GetBuff(target,11802);
        if(BuffFreeze != null)
        {          
            fightsystem.RemoveBuff(target,11802,timer,fv);
        }
        //清燃烧
        var BuffFlame = fightsystem.GetBuff(target,11804);
        if(BuffFlame != null)
        {
            fightsystem.RemoveBuff(target,11804,timer,fv);
        }
        //清热血
        var BuffWarmBlooded = fightsystem.GetBuff(target,11814);
        if(BuffWarmBlooded != null)
        {
            fightsystem.RemoveBuff(target,11814,timer,fv);
        }
        fightsystem.AddBuff(target,11802,timer,fv,BreakBonus,0);
        //把格挡保存下来
        if(BuffParry != null)
        {
            fightsystem.AddBuff(target,11841,timer,fv);
        }
    }       
    self.MP -= MPCost;
    fv.DecMP = MPCost;  
    var BuffDrain = fightsystem.GetBuff(self, 11836);
    if(BuffDrain != null)
    {
        fightsystem.RemoveBuff(self,11836,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}