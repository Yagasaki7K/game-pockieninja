package 
{
	import flash.display.Sprite;
	import flash.events.Event;
	
	/**
	 * ...
	 * @author myth815
	 */
	public class SourceMain extends Sprite 
	{
		
		public function SourceMain():void 
		{
			super();
		}
		
		public function GetRoleSource():MotionSource
		{
			return new MotionSource;
		}		
	}
	
}