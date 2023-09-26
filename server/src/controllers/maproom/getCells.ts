import { KoaController } from "../../utils/KoaController";

export const getMapRoomCells: KoaController = async ctx => {
    ctx.status = 200;
    ctx.body = {
      error: 0,
      celldata: [
        {
          n: "Placeholder name",
          uid: 101, // user ID
          bid: 1234, // base ID
          tid: 0, // wild monster tribe ID
          x: 500, // base x-coord
          y: 500, // base y-coord
          aid: 0,
          l: 0,
          pl: 0,
          r: 0,
          dm: 0,
          rel: 7,
          lo: 0,
          fr: 0,
          p: 0,
          d: 0,
          t: 0,
          fbid: "",
        },
      ],
      h: "someHashValue",
    };
  };