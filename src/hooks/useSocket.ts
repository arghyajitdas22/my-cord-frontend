import { create } from "zustand";
import socketio from "socket.io-client";
import { useUser } from "./useUser";

interface ISocketStore {
  socket: ReturnType<typeof socketio> | null;
  initializeSocket: () => void;
  disconnectSocket: () => void;
}

export const useSocket = create<ISocketStore>()((set) => ({
  socket: null,
  initializeSocket: () => {
    const user = useUser((state) => state.user);
    const socket = socketio(import.meta.env.VITE_SOCKET_URL, {
      withCredentials: true,
      auth: { accessToken: user?.accessToken },
    });
    set({ socket });
  },
  disconnectSocket: () => {
    set((state) => {
      state.socket?.disconnect();
      return { socket: null };
    });
  },
}));
