importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土流壁
function OnUser(fightsystem, self, target, skill, fv,timer)
{    
    var Chance = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            Chance = 19;
            break;
        }
        case 2: 
        {
            Chance = 19;
            break;
        } 
        case 3: 
        {
            Chance = 18;
            break;
        } 
        case 4: 
        {
            Chance = 19;
            break;
        } 
        case 5: 
        {
            Chance = 20;
            break;
        }
        case 6: 
        {
            Chance = 21;
            break;
        }
        case 7: 
        {
            Chance = 23.946;
            break;
        } 
        case 8: 
        {
            Chance = 24.95;
            break;
        }
        case 9: 
        {
            Chance = 25.88;
            break;
        } 
        case 10: 
        {
            Chance = 26.709;
            break;
        }
        case 11: 
        {
            Chance = 27.533;
            break;
        } 
        case 12: 
        {
            Chance = 28.281;
            break;
        } 
        case 13: 
        {
            Chance = 29.002;
            break;
        }    
        default: ;
    }
    Chance = Chance * (1+0.01*LogicTool.ToInt(self.SkillAdd2*0.01));
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(!(LogicTool.RandInt(0, 99) < Chance))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var BuffEarthWall = fightsystem.GetBuff(self,11824);
        if(BuffEarthWall == null)
            fightsystem.AddBuff(self,11824,timer,fv);
        return UserSkillReturn.SKILL_LOSE;
    }
}