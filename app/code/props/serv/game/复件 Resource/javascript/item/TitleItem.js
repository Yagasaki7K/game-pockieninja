importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);


// 称号道具
var SHOW_TIP_TYPE_BOX = 1;
var SHOW_TIP_TYPE_SYSINFO = 2;

// item:道具
// player:玩家
function OnUse(jssystem, item, player)
{
    var m_Kernel = jssystem.GetKernel();

    if (! m_Kernel.Exists(item))
        return;

    if (! m_Kernel.Exists(player))
        return;

    if (!m_Kernel.IsClass(item, ClassIndex.CLASS_TITLEITEM))
    {
        return;
    }

    var titleMsg = new VarList();
    titleMsg.AddObject(item);

    m_Kernel.Command(player, CommandDefine.COMMAND_ROLE_TITLE_INSERT, titleMsg);
}
