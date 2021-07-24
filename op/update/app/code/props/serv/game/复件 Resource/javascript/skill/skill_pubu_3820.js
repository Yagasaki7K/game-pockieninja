importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//大瀑布，时机和格挡类一样且共用概率
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.3);
    var DizzyTime = 0;
    var WaterDamage = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            WaterDamage = 0;
            DizzyTime = 600;
            break;
        }
        case 2: 
        {
            WaterDamage = 0;
            DizzyTime = 600;
            break;
        } 
        case 3: 
        {
            WaterDamage = 28;
            break;
        } 
        case 4: 
        {
            WaterDamage = 30;
            break;
        } 
        case 5: 
        {
            WaterDamage = 33;
            break;
        }
        case 6: 
        {
            WaterDamage = 36;
            break;
        }
        case 7: 
        {
            WaterDamage = 39;
            break;
        } 
        case 8: 
        {
            WaterDamage = 42;
            break;
        }
        case 9: 
        {
            WaterDamage = 45;
            break;
        } 
        case 10: 
        {
            WaterDamage = 47;
            break;
        }
        case 11: 
        {
            WaterDamage = 50;
            break;
        }
        case 12: 
        {
            WaterDamage = 53;
            break;
        }
        case 13: 
        {
            WaterDamage = 56;
            break;
        }   
        default: ;
    }
    DizzyTime = DizzyTime * (1+0.01*LogicTool.ToInt(self.SkillAdd1*0.01));
    var CheckBuff = fightsystem.GetRollBuff(self);
    if(!((CheckBuff != null)&&(CheckBuff.GetOverlying() == 1)))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        WaterDamage = WaterDamage*0.25;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(!(InitBuff.SaveData%10 < 3))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var AttackDamage = fightsystem.GetDamage(self)*WaterDamage;
        fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
        var BuffPeg = fightsystem.GetBuff(target,11840);
        //命中
        if((fv.IsHit == 1)&&(BuffPeg == null))
        {       
            //检查重复状态
            var BuffDizzy = fightsystem.GetBuff(target,11813);
            if(BuffDizzy != null)
            {          
                fightsystem.RemoveBuff(target,11813,timer,fv);
            }
            fightsystem.AddBuff(target,11813,timer,fv,DizzyTime,0);
            InitBuff.SaveData += 1;
            //把燃烧清除掉
            var BuffFlame = fightsystem.GetBuff(target,11804);
            if(BuffFlame != null)
            {
                fightsystem.RemoveBuff(target,11804,timer,fv);
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
}