importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//激怒，禁止技能，攻击和速度提升
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.CanUseSkill -= 1;
    self.AtkTimeAdd -= 5; //改算法
    self.MinAtkAdd += 20;
    self.MaxAtkAdd += 20;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.CanUseSkill += 1;
    self.AtkTimeAdd += 5;
    self.MinAtkAdd -= 20;
    self.MaxAtkAdd -= 20;
}