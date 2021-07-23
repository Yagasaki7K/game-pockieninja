importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//打断效果
function OnAdd(fightsystem,self, buff, fv,timer)
{
    if(self.CanAttack == 1)
    {
        self.CanAttack = 0;
        buff.SaveData = 1;
    }
    if(self.CanUserSkill == 1)
    {
        self.CanUserSkill = 0;    
        buff.SaveData1 = 1;
    }
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.CanAttack += buff.SaveData; 
    self.CanUserSkill += buff.SaveData1;   
}