import { create } from 'zustand';

interface State {
	whitelist: string | undefined;
	whitelistUrl: string | undefined;
}

interface Actions {
	setWhitelist: (whitelist: string) => void;
	setWhitelistUrl: (whitelistUrl: string) => void;
}

type IStore = State & Actions;

export const useWhitelistStore = create<IStore>(
	(set): IStore => ({
		whitelist: undefined,
		whitelistUrl: undefined,

		setWhitelist(whitelist) {
			set({ whitelist });
		},

		setWhitelistUrl(whitelistUrl) {
			set({ whitelistUrl });
		},
	}),
);
