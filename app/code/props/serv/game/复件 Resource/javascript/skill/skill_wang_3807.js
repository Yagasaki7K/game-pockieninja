importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//网，行动前，可以躲
function OnUser(fightsystem, self, target, skill, fv,timer) 
{
    var SeizeTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            SeizeTime = 25;
            break;
        }
        case 2: 
        {
            SeizeTime = 33;
            break;
        } 
        case 3: 
        {
            SeizeTime = 42;
            break;
        } 
        case 4: 
        {
            SeizeTime = 51;
            break;
        } 
        case 5: 
        {
            SeizeTime = 60;
            break;
        }
        case 6: 
        {
            SeizeTime = 4.579;
            break;
        }
        case 7: 
        {
            SeizeTime = 4.789;
            break;
        } 
        case 8: 
        {
            SeizeTime = 4.99;
            break;
        }
        case 9: 
        {
            SeizeTime = 5.176;
            break;
        } 
        case 10: 
        {
            SeizeTime = 5.342;
            break;
        }
        case 11: 
        {
            SeizeTime = 5.507;
            break;
        }
        case 12: 
        {
            SeizeTime = 5.656;
            break;
        }
        case 13: 
        {
            SeizeTime = 5.8;
            break;
        }   
        default: ;
    }
    var BuffSeize = fightsystem.GetBuff(target,11816);
    if(BuffSeize != null)
        return UserSkillReturn.SKILL_LOSE;
    else 
    {
        fightsystem.AddBuff(target,11816,timer,fv,SeizeTime,0);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}