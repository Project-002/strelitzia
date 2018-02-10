/**
 * A command that can be ran
 */
class Command {
	/**
	 * Options that are passed when creating a new command
	 * @typedef {object} CommandOptions
	 * @prop {string} [name] The command name
	 * @prop {string[]} [aliases] The command aliases
	 * @prop {string} [description] The command description
	 */

	/**
	 * Creates an instance of Command.
	 * @param {Strelitzia} client The client
	 * @param {CommandOptions} [options={}] The command options
	 * @memberof Command
	 */
	constructor(client, options = {}) {
		Object.defineProperty(this, 'client', { value: client });

		this.name = options.name;
		this.aliases = options.aliases || [];
		this.description = options.description;

		this.subCommands = [];
	}

	/**
	 * Determines if the command is a subcommand or not
	 * @returns {boolean}
	 * @memberof Command
	 */
	isSubCommand() {
		return false;
	}

	/**
	 * Runs the command
	 * @param {object} message The raw message data
	 * @param {string} args The parsed arguments
	 * @abstract
	 * @memberof Command
	 */
	async run(message, args) {} // eslint-disable-line no-unused-vars
}

module.exports = Command;
