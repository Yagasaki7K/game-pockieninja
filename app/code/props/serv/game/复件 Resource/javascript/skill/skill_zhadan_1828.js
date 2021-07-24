importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//炸弹
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BombDamage = 0;
    var Chance = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            BombDamage = 2.1;
            break;
        }
        case 2: 
        {
            BombDamage = 2.1;
            break;
        } 
        case 3: 
        {
            BombDamage = 47;
            break;
        } 
        case 4: 
        {
            BombDamage = 62;
            break;
        } 
        case 5: 
        {
            BombDamage = 79;
            break;
        }
        case 6: 
        {
            BombDamage = 98;
            break;
        }
        case 7: 
        {
            BombDamage = 119;
            break;
        } 
        case 8: 
        {
            BombDamage = 141;
            break;
        }
        case 9: 
        {
            BombDamage = 165;
            break;
        } 
        case 10: 
        {
            BombDamage = 191;
            break;
        }
        case 11: 
        {
            BombDamage = 218;
            break;
        }
        case 12: 
        {
            BombDamage = 247;
            break;
        }
        case 13: 
        {
            BombDamage = 278;
            break;
        }  
        default: ;
    }
    BombDamage = BombDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd6*0.01));
    if(self.CanAttack < 1)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    Chance += 100 - 100/(1+Math.pow(timer/200,0.5)*0.05);
    //远程的干掉土流壁
    var BuffEarthWall = fightsystem.GetBuff(target,11824);
    if(BuffEarthWall != null)
    {
        fightsystem.RemoveBuff(target,11824,timer,fv);
    }
    //看对方是否踢回炸弹且必须是CounterBombMul大于0的人形怪或Clothing不等于0的角色
    if((LogicTool.RandInt(0, 99) < Chance)&&((target.Clothing != 0)||(target.CounterBombMul > 0))&&(target.CanMove > 0)&&(target.CanAttack > 0)) 
    {
        fv.RoleIndex = target.Index;
        fv.Event = FightSavaDefine.BACK_THROWD_BOMB;
        fv.SkillId = 1828;
        var AttackDamage = fightsystem.GetDamage(self)*BombDamage;
        fightsystem.Attack(target,self,AttackDamage,0,fv,timer);
    }
    else
    {
        var AttackDamage = fightsystem.GetDamage(self)*BombDamage;
        fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}
