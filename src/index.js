module.exports = {
	Strelitzia: require('./structures/Client'),
	Client: require('./structures/Client'),

	Argument: require('./structures/Argument'),
	ArgumentCollector: require('./structures/ArgumentCollector'),
	ArgumentType: require('./structures/ArgumentType'),
	Collection: require('./structures/Collection'),
	Command: require('./structures/Command'),
	Event: require('./structures/Event'),
	SubCommand: require('./structures/SubCommand'),

	awaitMessages: require('./util/awaitMessages'),
	idToBinary: require('./util/idToBinary'),
	paginate: require('./util/paginate'),
	unindent: require('./util/unindent')
};
