"use strict";
function Oblicz()
{
    let e = document.getElementById("SelectTest");
    document.getElementById("Wynik").innerHTML = e.value;

}



// public class Calc {

//     int data_table[][] =new int[5][14];
//     int configuration[] = new int[13];
//     int aplikacja[] = new int[4];
//     int rodzaj_aplikacji=0;
//     int maksymalny_przebieg_wózka;
//     double mnożnik_aplikacji;
//     double mnożnik_serwisowania;

//     //dane do drugiej tabeli 
//     public int aktualny_przebieg;
//     public boolean serwisowanyWgDTR=true;
//     public int napęd = 0;

//     public double resurs = 0;


//     Calc(){
//         for (int y = 0; y < 14; y++) {
//             for (int x = 0; x < 5; x++) {
//                 data_table[x][y]=0;
//             } 
//         }

//         //ustawianie pierwszego wiersza
//         data_table[1][0]=1;
//         data_table[2][0]=1;
//         data_table[3][0]=1;
//         data_table[4][0]=1;

//         //ustawianie drugiego wiersza
//         data_table[1][1]=1;
//         data_table[2][1]=1;
//         data_table[3][1]=1;
//         data_table[4][1]=1;

//         //ustawianie trzeciego wiersza
//         data_table[1][2]=1;
//         data_table[2][2]=1;
//         data_table[3][2]=1;
//         data_table[4][2]=1;

//         //ustawianie czwartego wiersza
//         data_table[1][3]=1;
//         data_table[2][3]=2;
//         data_table[3][3]=3;
//         data_table[4][3]=2;

//         //ustawianie piątego wiersza
//         data_table[1][4]=1;
//         data_table[2][4]=1;
//         data_table[3][4]=1;
//         data_table[4][4]=1;

//         //ustawianie dziesiątego wiersza
//         data_table[1][9]=2;
//         data_table[2][9]=2;
//         data_table[3][9]=3;
//         data_table[4][9]=2;

//         //ustawianie czternastego wiersza
//         data_table[1][13]=7;
//         data_table[2][13]=8;
//         data_table[3][13]=10;
//         data_table[4][13]=8;

//     }
//     public void Print(){
//         System.out.println("Con| IC| E | WH|VNA|");
//         for (int y = 0; y < 14; y++) {
//             for (int x = 0; x < 5; x++) {
//                 if(data_table[x][y]<10){
//                     System.out.print(data_table[x][y]+"  |");
//                 }else{
//                     System.out.print(data_table[x][y]+" |");
//                 }

//             } 
//             System.out.println("");
//         }
//         System.out.println("Rodzaj Aplikacji");
//         System.out.println("IC| E | WH|VNA|");
//         System.out.println(aplikacja[0]+" | "+aplikacja[1]+" | "+aplikacja[2]+" | "+aplikacja[3]);
//         System.out.println("Rodzaj napędu: "+napęd);
//         System.out.println("Przebieg: "+ aktualny_przebieg);
//         System.out.println("Maksymalny przebieg dla danego typu wózka: "+ maksymalny_przebieg_wózka);
//         System.out.println("Resurs: "+ resurs);
//     }
//     public void SetConfiguration(int value, int location){
//         data_table[0][location]=value;
//     }

//     public void Reload(){

//         //baza

//         for (int y = 0; y < 14; y++) {
//             for (int x = 1; x < 5; x++) {
//                 data_table[x][y]=0;
//             } 
//         }

//         //ustawianie pierwszego wiersza
//         data_table[1][0]=1;
//         data_table[2][0]=1;
//         data_table[3][0]=1;
//         data_table[4][0]=1;
//         //ustawianie drugiego wiersza
//         data_table[1][1]=1;
//         data_table[2][1]=1;
//         data_table[3][1]=1;
//         data_table[4][1]=1;
//         //ustawianie trzeciego wiersza
//         data_table[1][2]=1;
//         data_table[2][2]=1;
//         data_table[3][2]=1;
//         data_table[4][2]=1;
//         //ustawianie czwartego wiersza
//         data_table[1][3]=1;
//         data_table[2][3]=2;
//         data_table[3][3]=3;
//         data_table[4][3]=2;
//         //ustawianie piątego wiersza
//         data_table[1][4]=1;
//         data_table[2][4]=1;
//         data_table[3][4]=1;
//         data_table[4][4]=1;
//         //ustawianie dziesiątego wiersza
//         data_table[1][9]=2;
//         data_table[2][9]=2;
//         data_table[3][9]=3;
//         data_table[4][9]=2;

        

//         //przyciski
//         //zrobić tak żeby kurz nie wpływał na inne wiersze


//         //trzynasty wiersz
//         data_table[1][12]=data_table[0][12]*2;
//         data_table[2][12]=data_table[0][12]*2;
//         data_table[3][12]=data_table[0][12]*2;
//         data_table[4][12]=data_table[0][12]*2;

//         //dwunasty wiersz
//         data_table[2][11]=data_table[0][11]*2*3;
//         data_table[3][11]=data_table[0][11]*2*3;
//         data_table[4][11]=data_table[0][11]*2*2;

//         //jedenasty wiersz
        
//         data_table[2][10]=data_table[0][10]*2*3;
//         data_table[3][10]=data_table[0][10]*2*3;
//         data_table[4][10]=data_table[0][10]*2*2;

//         //dziesiąty wiersz
//         if(data_table[0][9]==1){
//             data_table[1][9]=3;
//             data_table[2][9]=3;
//             data_table[3][9]=5;
//             data_table[4][9]=4;
//         }else if(data_table[0][9]==2){
//             data_table[1][9]=5;
//             data_table[2][9]=5;
//             data_table[3][9]=8;
//             data_table[4][9]=6;
//         }

//         //dziewiąty wiersz
//         if(data_table[0][8]==1){
//             data_table[1][8]=2;
//             data_table[2][8]=2;
//             data_table[3][8]=2;
//             data_table[4][8]=2;
//         }else if(data_table[0][8]==2){
//             data_table[1][8]=5;
//             data_table[2][8]=5;
//             data_table[3][8]=5;
//             data_table[4][8]=5;
//         }

//         //ósmy wiersz
//         if(data_table[0][7]==1){
//             data_table[1][7]=2;
//             data_table[2][7]=2;
//             data_table[3][7]=2;
//             data_table[4][7]=2;
//         }else if(data_table[0][7]==2){
//             data_table[1][7]=5;
//             data_table[2][7]=5;
//             data_table[3][7]=5;
//             data_table[4][7]=5;
//         }

//         //siódmy wiersz
//         if(data_table[0][6]==1){
//             data_table[1][6]=2;
//             data_table[2][6]=2;
//             data_table[3][6]=2;
//             data_table[4][6]=2;
//         }else if(data_table[0][6]==2){
//             data_table[1][6]=4;
//             data_table[2][6]=4;
//             data_table[3][6]=4;
//             data_table[4][6]=4;
//         }

//         //szósty wiersz
//         if(data_table[0][5]==1){
//             data_table[1][5]=2;
//             data_table[2][5]=2;
//             data_table[3][5]=2;
//             data_table[4][5]=2;
//         }else if(data_table[0][5]==2){
//             data_table[1][5]=4;
//             data_table[2][5]=4;
//             data_table[3][5]=4;
//             data_table[4][5]=4;
//         }

//         //piąty wiersz
//         if(data_table[0][4]==1){
//             data_table[1][4]=3;
//             data_table[2][4]=5;
//             data_table[3][4]=5;
//             data_table[4][4]=4;
//         }else if(data_table[0][4]==2){
//             data_table[1][4]=7;
//             data_table[2][4]=11;
//             data_table[3][4]=11;
//             data_table[4][4]=10;
//         }

//         //czwarty wiersz
//         if(data_table[0][3]==1){
//             data_table[1][3]=2;
//             data_table[2][3]=3;
//             data_table[3][3]=7;
//             data_table[4][3]=4;
//         }else if(data_table[0][3]==2){
//             data_table[1][3]=4;
//             data_table[2][3]=5;
//             data_table[3][3]=12;
//             data_table[4][3]=7;
//         }

//         //trzeci wiersz
//         if(data_table[0][2]==1){
//             data_table[1][2]=3;
//             data_table[2][2]=3;
//             data_table[3][2]=5;
//             data_table[4][2]=4;
//         }else if(data_table[0][2]==2){
//             data_table[1][2]=5;
//             data_table[2][2]=5;
//             data_table[3][2]=8;
//             data_table[4][2]=6;
//         }

//         //drugi wiersz
//         if(data_table[0][1]==1){
//             data_table[1][1]=4;
//             data_table[2][1]=6;
//             data_table[3][1]=6;
//             data_table[4][1]=5;

//         }else if(data_table[0][1]==2){
//             data_table[1][1]=9;
//             data_table[2][1]=12;
//             data_table[3][1]=12;
//             data_table[4][1]=11;
//         }

//         //pierwszy wiersz
//         if(data_table[0][0]==1){
//             data_table[1][0]=3;
//             data_table[2][0]=4;
//             data_table[3][0]=4;
//             data_table[4][0]=4;
//         }else if(data_table[0][0]==2){
//             data_table[1][0]=7;
//             data_table[2][0]=10;
//             data_table[3][0]=10;
//             data_table[4][0]=9;
//         } 


//         //sumowanie
//         int temp_suma=0;
//         for (int i = 0; i < 13; i++) {
//             temp_suma=temp_suma+data_table[1][i];
//         }
//         data_table[1][13]=temp_suma;

//         temp_suma=0;
//         for (int i = 0; i < 13; i++) {
//             temp_suma=temp_suma+data_table[2][i];
//         }
//         data_table[2][13]=temp_suma;

//         temp_suma=0;
//         for (int i = 0; i < 13; i++) {
//             temp_suma=temp_suma+data_table[3][i];
//         }
//         data_table[3][13]=temp_suma;

//         temp_suma=0;
//         for (int i = 0; i < 13; i++) {
//             temp_suma=temp_suma+data_table[4][i];
//         }
//         data_table[4][13]=temp_suma;


//         //aplikacja 
//         // 20=+ to mieszana
//         // 45=+ to ciężka
//         for (int i = 0; i < 4; i++) {
//             if(data_table[i+1][13]>=44){
//                 aplikacja[i]=2;
//             }else if(data_table[i+1][13]>=20){
//                 aplikacja[i]=1;
//             }else{
//                 aplikacja[i]=0;
//             }
//         }

//         // Spalinowe max x = 40 000
//         // Elektryczne max x = 35 000
//         if(napęd==0){
//             maksymalny_przebieg_wózka=40000;
//         }else if(napęd==1){
//             maksymalny_przebieg_wózka=35000;
//         }else if(napęd==2){
//             maksymalny_przebieg_wózka=28000;
//         }else if(napęd==3){
//             maksymalny_przebieg_wózka=40000;
//         }
//         //Serwisowane
//         // tak 1.0
//         // nie 1.5
//         if(serwisowanyWgDTR){
//             mnożnik_serwisowania=1;            
//         }else{
//             mnożnik_serwisowania=1.5;
//         }

//         // Mnożniki rodzaju aplikacji 
//         // Ciężka   0.7
//         // Mieszana 0.85
//         // Lekka    1.0

//         rodzaj_aplikacji=aplikacja[napęd]; 
//         if(rodzaj_aplikacji==0){
//             mnożnik_aplikacji=1;
//         }else if(rodzaj_aplikacji==1){
//             mnożnik_aplikacji=0.85;
//         }else if(rodzaj_aplikacji==2){
//             mnożnik_aplikacji=0.7;
//         }

//         resurs=(aktualny_przebieg*mnożnik_serwisowania/(maksymalny_przebieg_wózka*mnożnik_aplikacji))*100;
//         resurs=Math.round(resurs*100);
//         resurs=resurs/100;
//         //zrobić tak żeby kurz nie wpływał na inne wiersze 
//         //przygotować do druku 
//     }
// }
