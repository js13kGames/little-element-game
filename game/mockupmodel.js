
function MockupModel( ) {
	
	// Board info
	this.id = 31337;
	this.name = "Mockup model level";
	
	// Board size
	this.size = { x: 10, y: 20 };	
	
	this.special_squares = {
		fire : ["0,1","1,0"],
		air : ["0,2","0,3"],
		water : ["3,8","3,9"],
		earth : ["5,11","5,12"],
		disabled : ["8,3","9,3"],
		blank : ["16,9","15,8"]
	};
	
	this.blocks = {
		"fire": {
			"s": 1,
			"sq": 1,
			"t":  0,
			"l": 2,
			"i": 0
		},
		"water": {
			"s": 0,
			"sq": 0,
			"t":  2,
			"l": 3,
			"i": 1
		},
		"Air": {
			"s": 2,
			"sq": 0,
			"t":  3,
			"l": 0,
			"i": 0
		},
		"earth": {
			"s": 0,
			"sq": 0,
			"t":  0,
			"l": 0,
			"i": 1
		}
	}
	
}