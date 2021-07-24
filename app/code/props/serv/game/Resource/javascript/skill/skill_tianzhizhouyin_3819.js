importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天之咒印
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPDrain = LogicTool.ToInt(BaseMPCost * 0.1);
    switch(skill.GetLevel())
    {
        case 1: 
        {
            break;
        }
        case 2: 
        {
            break;
        } 
        case 3: 
        {
            break;
        } 
        case 4: 
        {
            break;
        } 
        case 5: 
        {
            break;
        }
        case 6: 
        {
            break;
        }
        case 7: 
        {
            break;
        } 
        case 8: 
        {
            break;
        }
        case 9: 
        {
            break;
        } 
        case 10: 
        {
            break;
        }
        case 11: 
        {
            break;
        }
        case 12: 
        {
            break;
        }
        case 13: 
        {
            break;
        }   
        default: ;
    }
    var BuffMark = fightsystem.GetBuff(self,11823);
    if(BuffMark != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        fightsystem.AddBuff(self,11823,timer,fv);
        var BuffKangFeng = fightsystem.GetBuff(self,11880);
        if(BuffKangFeng == null)
        {
            //判断是否有亢奋+任意一个级别的杀戮光环
            var BuffShaLuGuangHuan0 = fightsystem.GetBuff(self,11853);
            var BuffShaLuGuangHuan1 = fightsystem.GetBuff(self,11854);
            var BuffShaLuGuangHuan2 = fightsystem.GetBuff(self,11855);
            if((BuffShaLuGuangHuan0 != null)&&(BuffShaLuGuangHuan0.SaveData != 0))
            {
                fightsystem.AddBuff(self,11880,timer,fv,999999,BuffShaLuGuangHuan0.SaveData);
            }
            else if((BuffShaLuGuangHuan1 != null)&&(BuffShaLuGuangHuan1.SaveData != 0))
            {
                fightsystem.AddBuff(self,11880,timer,fv,999999,BuffShaLuGuangHuan1.SaveData);
            }
            else if((BuffShaLuGuangHuan2 != null)&&(BuffShaLuGuangHuan2.SaveData != 0))
            {
                fightsystem.AddBuff(self,11880,timer,fv,999999,BuffShaLuGuangHuan2.SaveData);
            }
        }
        else
        {
            BuffKangFeng.SaveData = 999999;
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}