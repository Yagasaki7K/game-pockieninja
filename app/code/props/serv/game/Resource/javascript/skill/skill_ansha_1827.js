importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//暗杀
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 0.7);
    var AttackBonus = 0;
    var VampireBonus = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            AttackBonus = 1.2;
            VampireBonus = 0.5;
            break;
        }
        case 2: 
        { 
            AttackBonus = 1.2;
            VampireBonus = 0.5;
            break;
        } 
        case 3: 
        {
            AttackBonus = 1.2;
            break;
        } 
        case 4: 
        {
            AttackBonus = 1.3;
            break;
        } 
        case 5: 
        {
            AttackBonus = 1.4;
            break;
        }
        case 6: 
        {
            AttackBonus = 1.5;
            break;
        }
        case 7: 
        {
            AttackBonus = 0;
            break;
        } 
        case 8: 
        {
            AttackBonus = 0;
            break;
        }
        case 9: 
        {
            AttackBonus = 0;
            break;
        } 
        case 10: 
        {
            AttackBonus = 0;
            break;
        }
        case 11: 
        {
            AttackBonus = 0;
            break;
        } 
        case 12: 
        {
            AttackBonus = 0;
            break;
        } 
        case 13: 
        {
            AttackBonus = 0;
            break;
        }    
        default: ;
    }
    AttackBonus = AttackBonus * (1+0.01*LogicTool.ToInt(self.SkillAdd8*0.01));
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        AttackBonus = AttackBonus*0.3;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else 
    {
        self.VampiricHP += VampireBonus*100; 
        var AttackDamage = fightsystem.GetDamage(self)*AttackBonus;
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;
        }
        fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
        self.VampiricHP -= VampireBonus*100;
        if(fv.IsHit == 1)
        {
            var BuffPoison = fightsystem.GetBuff(target,11811);
            if(BuffPoison != null)
               fightsystem.AddBuff(self,11811,timer,fv,BuffPoison.LifeTime,0);
            var BuffWine = fightsystem.GetBuff(target,11806);
            if(BuffWine != null)
               fightsystem.AddBuff(self,11806,timer,fv,BuffWine.LifeTime,0);       
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost;     
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv);        
        return UserSkillReturn.SKILL_SUCCESS;
    }
}



