importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//阴愈伤灭，恢复红
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 0.6);
    var HPRecover = 0;
    var Heal = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            HPRecover = 3;
            Heal = 3;
            break;
        }
        case 2: 
        {
            HPRecover = 3;
            Heal = 3;
            break;
        } 
        case 3: 
        {
            HPRecover = 9;
            break;
        } 
        case 4: 
        {
            HPRecover = 10;
            break;
        } 
        case 5: 
        {
            HPRecover = 11;
            break;
        }
        case 6: 
        {
            HPRecover = 32;
            break;
        }
        case 7: 
        {
            HPRecover = 35;
            break;
        } 
        case 8: 
        {
            HPRecover = 39;
            break;
        }
        case 9: 
        {
            HPRecover = 43;
            break;
        } 
        case 10: 
        {
            HPRecover = 47;
            break;
        }
        case 11: 
        {
            HPRecover = 51;
            break;
        } 
        case 12: 
        {
            HPRecover = 54;
            break;
        } 
        case 13: 
        {
            HPRecover = 58;
            break;
        }    
        default: ;
    }
    HPRecover = HPRecover * (1+0.01*LogicTool.ToInt(self.SkillAdd9*0.01));
    Heal = Heal * (1+0.01*LogicTool.ToInt(self.SkillAdd9*0.01));
    HPRecover = HPRecover*0.01*self.MaxHP;
    Heal = Heal*0.01*self.MaxHP;
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        HPRecover = HPRecover*0.3;
        Heal = Heal*0.3;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else if(self.HP == self.GetInitMaxHP())
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var InitBuff = fightsystem.GetBuff(self,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    {
        if(InitBuff.SaveData1%10 < 3)
        {
            if(HPRecover + self.HP > self.GetInitMaxHP())
            {
                HPRecover = self.GetInitMaxHP() - self.HP;
            }
            self.HP += LogicTool.ToInt(HPRecover);
            var BuffHeal = fightsystem.GetBuff(self,11834);
            if(BuffHeal != null)
            {
                fightsystem.RemoveBuff(self,11834,timer,fv);
            }
            fightsystem.AddBuff(self,11834,timer,fv,Heal,0);
            fv.IncHP = HPRecover;
            self.MP -= MPCost;
            fv.DecMP = MPCost;
            InitBuff.SaveData1 += 1;
            var BuffDrain = fightsystem.GetBuff(self, 11836);
            if(BuffDrain != null)
            {
                fightsystem.RemoveBuff(self,11836,timer,fv);
            }
            var BuffKangFeng = fightsystem.GetBuff(self,11880);
            if(BuffKangFeng == null)
            {
                //判断是否有亢奋+任意一个级别的杀戮光环
                var BuffShaLuGuangHuan0 = fightsystem.GetBuff(self,11853);
                var BuffShaLuGuangHuan1 = fightsystem.GetBuff(self,11854);
                var BuffShaLuGuangHuan2 = fightsystem.GetBuff(self,11855);
                if((BuffShaLuGuangHuan0 != null)&&(BuffShaLuGuangHuan0.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,999997,BuffShaLuGuangHuan0.SaveData);
                }
                else if((BuffShaLuGuangHuan1 != null)&&(BuffShaLuGuangHuan1.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,999997,BuffShaLuGuangHuan1.SaveData);
                }
                else if((BuffShaLuGuangHuan2 != null)&&(BuffShaLuGuangHuan2.SaveData != 0))
                {
                    fightsystem.AddBuff(self,11880,timer,fv,999997,BuffShaLuGuangHuan2.SaveData);
                }
            }
            else if(BuffKangFeng.SaveData == 1)
            {
                BuffKangFeng.SaveData = 999997;
                BuffKangFeng.LifeTime = 999997;
            }            
            return UserSkillReturn.SKILL_SUCCESS;
        }
        else return UserSkillReturn.SKILL_LOSE;
    }
}