importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//尸鬼封尽，全技能等级下降
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.SkillAdd0 -= 1;
    self.SkillAdd1 -= 1;
    self.SkillAdd2 -= 1;
    self.SkillAdd3 -= 1;
    self.SkillAdd4 -= 1;
    self.SkillAdd5 -= 1;
    self.SkillAdd6 -= 1;
    self.SkillAdd7 -= 1;
    self.SkillAdd8 -= 1;
    self.SkillAdd9 -= 1; 
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.SkillAdd0 += 1;
    self.SkillAdd1 += 1;
    self.SkillAdd2 += 1;
    self.SkillAdd3 += 1;
    self.SkillAdd4 += 1;
    self.SkillAdd5 += 1;
    self.SkillAdd6 += 1;
    self.SkillAdd7 += 1;
    self.SkillAdd8 += 1;
    self.SkillAdd9 += 1; 
}