importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//凤仙火，受定额伤害触发的反馈
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //先检查铺垫buff有没有加过，没有就加
    if(!fightsystem.FindBuff(self,1818))
    {
        fightsystem.AddBuff(self,1818,timer,fv);
    }
    //否则拿这个buff做一下处理
    else
    {
        var script_buff = fightsystem.GetBuff(self,1818);
        if(script_buff.SaveData1 > self.HP) //伤血的
        {
            script_buff.SaveData += script_buff.SaveData1 - self.HP;
        }
        script_buff.SaveData1 = self.HP;
    }
    //检查本次伤害是否触发凤仙火
    if(script_buff.SaveData >= 10)
    {
        var script_damage = 15;
        fightsystem.Attack(self,target,script_damage,0,fv,timer);
        if(fv.IsHit == 1)
        {
            fightsystem.AddBuff(target,1804,timer,fv);
        }
        script_buff.SaveData -= 50;
        return UserSkillReturn.SKILL_SUCCESS;
    }
    else return UserSkillReturn.SKILL_LOSE;
}
    