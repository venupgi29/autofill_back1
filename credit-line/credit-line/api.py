import os
from flask import Flask, request, render_template, redirect, url_for, jsonify, Response
import json
import uuid
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_url_path='')

CORS(app)


@app.route('/', methods=['GET', 'POST'])
def displayMasterForm():
    uid = str(uuid.uuid4())
    return render_template('index.html', clientId=uid)


@app.route('/boa', methods=['GET', 'POST'])
def boa():

    return render_template('BoA-App.htm')


@app.route('/getJsonFile', methods=['GET', 'POST'])
def getJsonFile():
    fId = request.args.get("jsonId")
    fId = "data/" + fId + ".json"
    d= ""
    with open(fId) as json_data:
        d = json.load(json_data)
    payLoad =  jsonify(d)

    return payLoad



@app.route('/saveMasterForm', methods=['GET', 'POST'])
def saveMasterForm():
    data = {}

    cards = []

    print (request.form['uFname'])

    data["uFname"] = request.form.get("uFname", "")
    data["uLname"] = request.form.get('uLname', "")
    data["uMname"] = request.form.get('uMname', "")
    data["uSuffix"] = request.form.get('uSuffix', "")
    data["uAddr1"] = request.form.get('uAddr1', "")
    data["uAddr2"] = request.form.get('uAddr2', "")
    data["uUnit"] = request.form.get('uUnit', "")
    data["uCity"] = request.form.get('uCity', "")
    data["uState"] = request.form.get('uState', "")
    data["uZip"] = request.form.get('uZip', "")
    data["uRtype"] = request.form.get('uRtype', "")
    data["uDOB"] = request.form.get('uDOB', "")
    

    #data["uAtype"] = request.form.get('uAtype, "")

    data["uChecking"] = request.form.get('uChecking', "")
    data["uSavings"] = request.form.get('uSavings', "")


    data["uMortgage"] = request.form.get('uMortgage', "")
    data["uGincome"] = request.form.get('uGincome', "")
    data["uSincome"] = request.form.get('uSincome', "")
    data["uEmployer"] = request.form.get('uEmployer', "")
    data["uPhone"] = request.form.get('uPhone', "")
    data["uPhoneType"] = request.form.get('uPhoneType', "")
    data["uSSNumber"] = request.form.get('uSSNumber', "")
    data["uMail"] = request.form.get('uMail', "")
    data["uMMname"] = request.form.get('uMMname', "")


    ## Identity

    data["uResidentType"] = request.form.get('uResidentType', "")
    data["uIdType"] = request.form.get('uIdType', "")
    data["uIdNo"] = request.form.get('uIdNo', "")
    data["uIdState"] = request.form.get('uIdState', "")
    data["uIdCountry"] = request.form.get('uIdCountry', "")
    data["uIdIssueDate"] = request.form.get('uIdIssueDate', "")
    data["uIdExpiryDate"] = request.form.get('uIdExpiryDate', "")
    data["uCountryOfResidence"] = request.form.get('uCountryOfResidence', "")


    ## End Identity
    ##Employer

    data["uEmployer"] = request.form.get('uEmployer', "")
    data["uEmployerAddr"] = request.form.get('uEmployerAddr', "")
    data["uEmploymentTitle"] = request.form.get('uEmploymentTitle', "")
    data["uEmployerPhone"] = request.form.get('uEmployerPhone', "")
    data["uStartDate"] = request.form.get('uStartDate', "")
    data["uEndDate"] = request.form.get('uEndDate', "")
    data["uEmployerCity"] = request.form.get('uEmployerCity', "")
    data["uEmployerState"] = request.form.get('uEmployerState', "")

    data["uEmployerCountry"] = request.form.get('uEmployerCountry', "")
    data["uEmployerZip"] = request.form.get('uEmployerZip', "")
    data["uEmployerStatus"] = request.form.get('uEmployerStatus', "")
    data["uEmployerYears"] = request.form.get('uEmployerYears', "")
    data["uEmployerMonths"] = request.form.get('uEmployerMonths', "")
    
    ##Self employed income

    ##name on card    ( added from here subhendu )
    data["uNameOnCard"] = request.form.get('uNameOnCard', "")

    ##phone
    data["uHomePhone"] = request.form.get('uHomePhone', "")
    data["uMobilePhone"] = request.form.get('uMobilePhone', "")
    data["uWorkPhone"] = request.form.get('uWorkPhone', "")
    data["uPreferredPhone"] = request.form.get('uPreferredPhone', "")

    #Mailing Address
    data["uMAddr1"] = request.form.get('uMAddr1', "")
    data["uMAddr2"] = request.form.get('uMAddr2', "")
    data["uMUnit"] = request.form.get('uMUnit', "")
    data["uMCity"] = request.form.get('uMCity', "")
    data["uMState"] = request.form.get('uMState', "")
    data["uMZip"] = request.form.get('uMZip', "")
    data["uMCountry"] = request.form.get('uMCountry', "")
    data["uCountry"] = request.form.get('uCountry', "")
    data["uMailAddr"] = request.form.get('uMailAddr', "N")
    

    ##financial information Income
    data["uYearAtAddr"] = request.form.get('uYearAtAddr', "")
    data["uMonAtAddr"] = request.form.get('uMonAtAddr', "")
    data["uAnnualIncome"] = request.form.get('uAnnualIncome', "")
    data["uAdditionalIncome"] = request.form.get('uAdditionalIncome', "")
    data["uAdditionalIncome1"] = request.form.get('uAdditionalIncome1', "")
    data["uAdditionalIncome2"] = request.form.get('uAdditionalIncome2', "")
    data["uGIncome2"] = request.form.get('uGIncome2', "")
    data["uAdditionalIncome3"] = request.form.get('uAdditionalIncome3', "")
    data["uGIncome3"] = request.form.get('uGIncome3', "")

    ##income source
    data["uAccessibleIncome"] = request.form.get('uAccessibleIncome', "")
    data["uFinancialAffiliation"] = request.form.get('uFinancialAffiliation', "")
    data["ucreditRepoAuth"] = request.form.get('ucreditRepoAuth', "")
    data["uAccountAuth"] = request.form.get('uAccountAuth', "")
    data["uCheckingAccount"] = request.form.get('uCheckingAccount', "")
    data["uSavingIRa"] = request.form.get('uSavingIRa', "")
    data["uIncomeSource"] = request.form.get('uIncomeSource', "")
    data["uLiquidAssets"] = request.form.get('uLiquidAssets', "")
    data["uTotalExp"] = request.form.get('uTotalExp', "")


    ##occupation    
    data["uOccupation"] = request.form.get('uOccupation', "")
    data["uEducation"] = request.form.get('uEducation', "")
    data["uSelfEmployed"] = request.form.get('uSelfEmployed', "N")
    data["uEmployed"] = request.form.get('uEmployed', "N")
    data["uOther"] = request.form.get('uOther', "N")
    ##CoBorrower    
    data["uCoBorrower"] = request.form.get('uCoBorrower', "N")
    data["uCoBorrowerMName"] = request.form.get('uCoBorrowerMName', "")
    data["uCoBorrowerFName"] = request.form.get('uCoBorrowerFName', "")
    data["uCoBorrowerLName"] = request.form.get('uCoBorrowerLName', "")
    data["uCoBorrowerDOB"] = request.form.get('uCoBorrowerDOB', "")
    data["uCoBorrowerEmail"] = request.form.get('uCoBorrowerEmail', "")
    data["uCoBorrowerPhone"] = request.form.get('uCoBorrowerPhone', "")
    data["uCoBorrowerSSN"] = request.form.get('uCoBorrowerSSN', "")

    ##Loan Filed
    data["uNoOfPeople"] = request.form.get('uNoOfPeople', "")
    data["uLoanAmount"] = request.form.get('uLoanAmount', "")
    data["uTypeOfLoan"] = request.form.get('uTypeOfLoan', "")
    data["uPrimarySourcesOfEmployment"] = request.form.get('uPrimarySourcesOfEmployment', "")

    ##Self Employment
    data["uBusinessName"] = request.form.get('uBusinessName', "")
    data["uNatureOfBusiness"] = request.form.get('uNatureOfBusiness', "")
    data["uBusinessStartDate"] = request.form.get('uBusinessStartDate', "")
    data["uBusinessEndDate"] = request.form.get('uBusinessEndDate', "")
    data["uBusinessAddr"] = request.form.get('uBusinessAddr', "")
    data["uBusinesZip"] = request.form.get('uBusinesZip', "")
    data["uBusinessCity"] = request.form.get('uBusinessCity', "")
    data["uBusnessState"] = request.form.get('uBusnessState', "")
    data["uBusinessCountry"] = request.form.get('uBusinessCountry', "")
    data["uBusinessPhone"] = request.form.get('uBusinessPhone', "")
    data["uBusinessStatus"] = request.form.get('uBusinessStatus', "")
    data["uBusinessInSameField"] = request.form.get('uBusinessInSameField', "")
    data["uMonthlyBusinessPay"] = request.form.get('uMonthlyBusinessPay', "")

    #business information
    #data["uBusinesName"] = request.form.get('uBusinesName', "")
    #data["uBusinesNameoncard"] = request.form.get('uBusinesNameoncard', "")
    #data["uBusinessAddr1"] = request.form.get('uBusinessAddr1', "")
    #data["uBusinessphoneNum"] = request.form.get('uBusinessphoneNum', "")
    #data["uBusinessAddr2"] = request.form.get('uBusinessAddr2', "")

    #Business addition informataion
    #data["uBustaxidnum"] = request.form.get('uBustaxidnum', "")
    #data["uIndustrytype"] = request.form.get('uIndustrytype', "")
    #data["uAnlbusinesRev"] = request.form.get('uAnlbusinesRev', "")
    #data["uBusspendPerMonth"] = request.form.get('uBusspendPerMonth', "")
    #data["uCategory"] = request.form.get('uCategory', "")
    #data["uSpeciality"] = request.form.get('uSpeciality', "")


    ##Other Income
    data["uPension"] = request.form.get('uPension', "")
    data["uRetirement"] = request.form.get('uRetirement', "")
    data["uDisablity"] = request.form.get('uDisablity', "")
    data["uSocialSecurity"] = request.form.get('uSocialSecurity', "")
    data["uAlimony"] = request.form.get('uAlimony', "")
    data["uWorkerCompensation"] = request.form.get('uWorkerCompensation', "")
    data["uPublicAssistance"] = request.form.get('uPublicAssistance', "")
    data["uChildSupport"] = request.form.get('uChildSupport', "")
    data["uRentalIncome"] = request.form.get('uRentalIncome', "")
    data["uOtherMonthlyIncome1"] = request.form.get('uOtherMonthlyIncome1', "")
    data["uOtherMontylySource1"] = request.form.get('uOtherMontylySource1', "")
    data["uOtherMonthlyIncome2"] = request.form.get('uOtherMonthlyIncome2', "")
    data["uOtherMontylySource2"] = request.form.get('uOtherMontylySource2', "")
    data["uOtherMonthlyIncome3"] = request.form.get('uOtherMonthlyIncome3', "")
    data["uOtherMontylySource3"] = request.form.get('uOtherMontylySource3', "")

    ##resident filed
    data["uResidentAliean"] = request.form.get('uResidentAliean', "")
    data["uNonResidentAliean"] = request.form.get('uNonResidentAliean', "")
	
    ##citizenship
    data["uUSCitizen"] = request.form.get('uUSCitizen', "")
    data["uDualCitizen"] = request.form.get('uDualCitizen', "")
    data["uCitizenCountry"] = request.form.get('uCitizenCountry', "")
    data["uCitizenShipStatus"] = request.form.get('uCitizenShipStatus', "")
    data["uMotherMaidenName"] = request.form.get('uMotherMaidenName', "")
    data["uAccountType"] = request.form.get('uAccountType', "")
    data["uIntentToSpend"] = request.form.get('uIntentToSpend', "")
    data["uSecurityWordHint"] = request.form.get('uSecurityWordHint', "")
    data["uSecurityWord"] = request.form.get('uSecurityWord', "")
    data["uMileagePlus"] = request.form.get('uMileagePlus', "")
    data["uRitzCarlton"] = request.form.get('uRitzCarlton', "")
    data["uTAC"] = request.form.get('uTAC', "")
    data["uDRC"] = request.form.get('uDRC', "")
	##Employment salary
    data["uMsalary"] = request.form.get('uMsalary', "")
    data["uMOvertime"] = request.form.get('uMOvertime', "")
    data["uMCommission"] = request.form.get('uMCommission', "")
    data["uMBonus"] = request.form.get('uMBonus', "")
	##Emargency Contact
    data["uEmargancyFname"] = request.form.get('uEmargancyFname', "")
    data["uEmargancyMname"] = request.form.get('uEmargancyMname', "")
    data["uEmargancyLname"] = request.form.get('uEmargancyLname', "")
    data["uEmargancyAddr"] = request.form.get('uEmargancyAddr', "")
    data["uEmargancyCity"] = request.form.get('uEmargancyCity', "")
    data["uEmargancyState"] = request.form.get('uEmargancyState', "")
    data["uEmargancyCountry"] = request.form.get('uEmargancyCountry', "")
    data["uEmargancyZip"] = request.form.get('uEmargancyZip', "")
    data["ucurrentEmployed"] = request.form.get('ucurrentEmployed', "Y")
	##Additional Business
    data["uBusnesslegal"] = request.form.get('uBusnesslegal', "")
    data["uBusinessownership"] = request.form.get('uBusinessownership', "")
    data["uBusinesTIN"] = request.form.get('uBusinesTIN', "")
    data["uBusinessold"] = request.form.get('uBusinessold', "")
    data["uBusnessindustry"] = request.form.get('uBusnessindustry', "")
    data["uBusinesSpend"] = request.form.get('uBusinesSpend', "")
    data["uBusinesHQ"] = request.form.get('uBusinesHQ', "")
    data["uBusineslegalCountry"] = request.form.get('uBusineslegalCountry', "")
    data["uBusinesPrimary"] = request.form.get('uBusinesPrimary', "")





    cards.append(request.form.get('card', ""))
    data["cards"] = cards
    uid = request.form.get('clientId', "")
    print( uid )
    result = jsonify(data)

    filename = "data" + "/" + uid + ".json"
    with open(filename, 'w') as outfile:
        json.dump(data, outfile)

    print( result )

    return redirect(cards[0], code=302)






if __name__ == '__main__':
    app.run(debug=True, port=8000, host='0.0.0.0')
