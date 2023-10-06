function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const randomcounter = (count, parts) => {
  if (isNaN(count)) return alert("квартироемкость не число");
  if (isNaN(parts)) return alert("количество частей не число");
  if (!((parts ^ 0) === parts))
    return alert("количество частей не целое число");
  const result = [];


  for (let i = 1; i <= parts; i++) {
    part.push(i);
  }

  let allRooms = [];
  for (let i = 1; i <= count; i++) {
    allRooms.push(i);
  }
  shuffle(allRooms);

  while (allRooms.length)
    result.push(allRooms.splice(0, Math.ceil(count / parts)));

  let obj = {};
  result.forEach((elem, index) => {
    obj[index + 1] = {
      counts: elem.length,
      apartaments: elem.sort((a, b) => a - b).join(";"),
    };
  });

  return obj;
};

// console.log(randomcounter(544, 3));
// const input = {
//   adress: "Коммунаров ул. (Горелово) 188/3",
//   date: "05.09.2023",
//   isFullConnection: "полностью",
//   apartmentsCount: "543",
// };

// const output = {
//   adress: "Коммунаров ул. (Горелово) 188/3",
//   date: "05.09.2023",
//   isFullConnection: "полностью",
//   apartmentsCount: "543",
//   partCount: "3",
//   part1: {
//     counts: "181",
//     apartaments:
//       "4;11;13;16;18;19;20;27;29;30;33;39;40;48;49;50;52;54;55;57;61;63;64;69;76;77;83;84;93;95;99;100;102;103;104;111;112;114;115;119;120;125;130;131;132;134;141;143;159;165;168;183;189;192;193;194;197;198;200;201;204;210;211;212;216;218;224;225;227;228;229;232;235;236;238;239;245;248;253;257;260;265;270;276;278;280;281;285;286;289;290;291;292;295;297;299;305;310;312;314;316;317;318;322;326;327;329;330;331;332;334;335;338;342;347;351;352;360;362;364;365;367;371;382;385;386;388;389;391;392;396;400;401;405;406;408;409;410;411;426;430;434;438;444;445;447;450;461;462;463;464;465;466;472;475;480;481;485;491;493;500;501;506;507;510;511;512;513;514;515;517;518;524;531;533;535;536;537;539;540;543",
//   },
//   part2: {},
//   part3: {},
// };
