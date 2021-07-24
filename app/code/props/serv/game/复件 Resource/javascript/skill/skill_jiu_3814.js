importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//酒
function OnUser(fightsystem, self, target, skill, fv,timer)
{ 
    var WineTime = 0;
    var Crit = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            WineTime = 12;
            Crit = 3;
            break;
        }
        case 2: 
        {
            WineTime = 16;
            Crit = 4;
            break;
        } 
        case 3: 
        {
            WineTime = 21;
            Crit = 6;
            break;
        } 
        case 4: 
        {
            WineTime = 25;
            Crit = 7;
            break;
        } 
        case 5: 
        {
            WineTime = 30;
            Crit = 8;
            break;
        }
        case 6: 
        {
            WineTime = 5.861;
            Crit = 0;
            break;
        }
        case 7: 
        {
            WineTime = 6.13;
            Crit = 0;
            break;
        } 
        case 8: 
        {
            WineTime = 6.387;
            Crit = 0;
            break;
        }
        case 9: 
        {
            WineTime = 6.625;
            Crit = 0;
            break;
        } 
        case 10: 
        {
            WineTime = 6.838;
            Crit = 0;
            break;
        }
        case 11: 
        {
            WineTime = 7.048;
            Crit = 0;
            break;
        }
        case 12: 
        {
            WineTime = 7.24;
            Crit = 0;
            break;
        }
        case 13: 
        {
            WineTime = 7.425;
            Crit = 0;
            break;
        }  
        default: ;
    }
    var BuffWine = fightsystem.GetBuff(target,11806);
    if(BuffWine != null)
        return UserSkillReturn.SKILL_LOSE;
    else 
    {
        fightsystem.AddBuff(target,11806,timer,fv,WineTime,Crit);
    }
    if(self.Sex == 1)
        fv.SkillId = 2829;
    return UserSkillReturn.SKILL_SUCCESS;
}