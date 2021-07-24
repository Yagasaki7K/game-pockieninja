importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//冰冻，禁止一切行动，防御降低，被伤害清除
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.CanAttack -= 1;
    self.CanUseSkill -= 1;
    self.Defense -= 500;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.CanAttack += 1;
    self.CanUseSkill += 1;
    self.Defense += 500;
}