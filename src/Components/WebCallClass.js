export class WebCallClass {
  // constructor() {}

  async testSql() {
    let a = "";

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            req: "test",
          }),
        }
      );
      const responseToJson = await response.json();
      // Mes = JSON.parse(responseToJson);

      a = responseToJson;
      //  alert(a)
    } catch (error) {
      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(["eroare clienti"], error);
      alert(error);
    }

    return a;
  }

  async login(user, pass) {
    const ResultData = {
      randId: "",
      userId: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            user: user,
            pass: pass,
            req: "login",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.rangId = "-1";
        ResultData.userId = "-1";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.rangId = raspuns.rangid;
        ResultData.userId = raspuns.id;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.rangId = "-1";
      ResultData.userId = "-1";
      ResultData.status = false;
      ResultData.mesaj = "Utilizator sau parola incorecta";
    }

    return ResultData;
  }

  async GetStudentInfo(id) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            id: id,
            req: "studentInfo",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === 0) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }

  async Materii(id) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            id: id,
            req: "materii",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;
      console.log(raspuns);

      if (raspuns === 0) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }

  async materiiProf(id) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            id: id,
            req: "materiiProf",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;
      console.log(raspuns);

      if (raspuns === 0) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }

  async Proiecte(id) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idStudent: id,
            req: "proiecte",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === 0) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }

  async newpass(id, newpass) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            id: id,
            newpass: newpass,
            req: "newpass",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }

  async idProiect(idproiect, idStud) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idProiect: idproiect,
            idStud: idStud,
            req: "idProiect",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "id negasit";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "id negasit";
    }

    return ResultData;
  }

  async idProiectProf(idproiect) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idProiect: idproiect,

            req: "idProiectProf",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "id negasit";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "id negasit";
    }

    return ResultData;
  }

  async uploadDateProiect(id, idStud, comentarii, denumireFisier) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            id: id,
            idStud: idStud,
            comentarii: comentarii,
            denumireFisier: denumireFisier,

            req: "uploadDateProiect",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "id negasit";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "id negasit";
    }

    return ResultData;
  }

  async listaStudProiect(idProiect) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idProiect: idProiect,
            req: "listaStudProiect",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "id negasit";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "id negasit";
    }

    return ResultData;
  }

  async createProject(idMaterie, denumire, idProfesor) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idMaterie: idMaterie,
            denumire: denumire,
            idProfesor: idProfesor,

            req: "createProject",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "id negasit";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "id negasit";
    }

    return ResultData;
  }

  async proiectStud(idProiect, idStudent) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idProiect: idProiect,
            idStudent: idStudent,

            req: "proiectStud",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "id negasit";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "id negasit";
    }

    return ResultData;
  }

  async GetProfInfo(id) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            id: id,
            req: "profInfo",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === 0) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }

  async notaProf(idProiect, idStud, nota, comentariuProf, stareProiect) {
    const ResultData = {
      content: "",
      mesaj: "",
      status: false,
    };

    try {
      const response = await fetch(
        "http://localhost/platforma_studenti/queries.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 500000000,
          body: JSON.stringify({
            idProiect: idProiect,
            idStud: idStud,
            nota: nota,
            comentariuProf: comentariuProf,
            stareProiect: stareProiect,
            req: "notaProf",
          }),
        }
      );
      const responseToJson = await response.json();

      let raspuns = responseToJson;

      if (raspuns === null) {
        ResultData.content = "";
        ResultData.status = false;
        ResultData.mesaj = "Utilizator sau parola incorecta";
      } else {
        ResultData.content = raspuns;
        ResultData.status = true;
        ResultData.mesaj = "ok";
      }
      console.debug(ResultData);
    } catch (error) {
      ResultData.content = "-1";
      ResultData.status = false;
      ResultData.mesaj = "A aparut o eroare la procesarea cererii";
    }

    return ResultData;
  }
}

// const GlobalWebCallClass = new WebCallClass();
// export default GlobalWebCallClass;
