importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物吸血
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = self.GetInitMaxMP()*0.12;
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else 
    {
        var script_damage = fightsystem.GetDamage(self)*1; //原值为1.2
        self.VampiricHP += 50;        
        fightsystem.Attack(self,target,script_damage,0,fv,timer);
        self.VampiricHP -= 50;
        if(fv.IsHit == 1)
        {
            var buff_zhongdu = fightsystem.GetBuff(target,11811);
            if(buff_zhongdu != null)
               fightsystem.AddBuff(self,11811,timer,fv);
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost;            
        return UserSkillReturn.SKILL_SUCCESS;
    }
}