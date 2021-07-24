importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//替身术
function OnUser(fightsystem, self, target, skill, fv,timer)
{ 
    var Chance = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            Chance = 17;
            break;
        }
        case 2: 
        {
            Chance = 17;
            break;
        } 
        case 3: 
        {
            Chance = 11;
            break;
        } 
        case 4: 
        {
            Chance = 12;
            break;
        } 
        case 5: 
        {
            Chance = 13;
            break;
        }
        case 6: 
        {
            Chance = 13.082;
            break;
        }
        case 7: 
        {
            Chance = 13.684;
            break;
        } 
        case 8: 
        {
            Chance = 14.257;
            break;
        }
        case 9: 
        {
            Chance = 14.789;
            break;
        } 
        case 10: 
        {
            Chance = 15.263;
            break;
        }
        case 11: 
        {
            Chance = 15.733;
            break;
        } 
        case 12: 
        {
            Chance = 16.16;
            break;
        } 
        case 13: 
        {
            Chance = 16.573;
            break;
        }   
        default: ;
    }
    Chance = Chance * (1+0.01*LogicTool.ToInt(self.SkillAdd8*0.01));
    if(!(LogicTool.RandInt(0, 99) < Chance))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var TargetIsFlaming = 0;
        var FlameDamage = 0;
        var BuffFlame = fightsystem.GetBuff(target,11804);
        if(BuffFlame != null)
        {
            TargetIsFlaming = 1;
            FlameDamage = BuffFlame.SaveData;
        }
        var BuffPeg = fightsystem.GetBuff(self,11840);
        if(BuffPeg == null)
        {
            fightsystem.AddBuff(self,11840,timer,fv,TargetIsFlaming,FlameDamage);
        }
        return UserSkillReturn.SKILL_LOSE;
    }
}