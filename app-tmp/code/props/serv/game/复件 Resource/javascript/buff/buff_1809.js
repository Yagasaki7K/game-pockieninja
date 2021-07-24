importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土牢，控制，吸蓝，但加防
function OnAdd(fightsystem, self, buff, fv, timer)
{
    self.Defence += 250;
    self.CanAttack -= 1;
    self.CanUseSkill -= 1;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    if(self.MP >= 30)
    {    
        self.MP -= 30;
        fv.DecMP = 30;
    }
    else
    { 
        var script_MP = self.MP;
        self.MP -= script_MP;
        fv.DecMP = script_MP;
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    self.Defence -= 250;
    self.CanAttack += 1;
    self.CanUseSkill += 1;
}