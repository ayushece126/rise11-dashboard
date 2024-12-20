"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, MapPin, Languages, FileText, Upload, Plus } from 'lucide-react'

export function ClaimForm() {
  const [currency, setCurrency] = useState("USD")

  return (
    <div className="bg-white rounded-lg shadow-sm p-1 md:p-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">File your Claim.</h2>
          <p className="text-gray-500 text-sm">(Approx 5 Minutes)</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Claim Value Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Calculator className="w-5 h-5" />
              Claim Value
            </div>
            <div className="space-y-4">
              <div>
                <Label>Contract Value</Label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="10,00.00" className="flex-1" />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-24 rounded-md border border-input bg-background px-3"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <div>
                <Label>Claim Value</Label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="15,00.00" className="flex-1" />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-24 rounded-md border border-input bg-background px-3"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <p className="text-orange-500 text-sm mt-1">150% of Contract Value</p>
              </div>
            </div>
          </div>

          {/* Place Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <MapPin className="w-5 h-5" />
              Place
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Select the Place for proceedings</p>
              <p className="text-sm text-gray-600 mb-4">
                Is the place for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup defaultValue="no" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-place" />
                  <Label htmlFor="yes-place">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-place" />
                  <Label htmlFor="no-place">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Language Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Languages className="w-5 h-5" />
              Language
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Select the language for proceedings</p>
              <p className="text-sm text-gray-600 mb-4">
                Is the language for the proceedings the one mentioned in the agreement?
              </p>
              <RadioGroup defaultValue="no" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-lang" />
                  <Label htmlFor="yes-lang">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-lang" />
                  <Label htmlFor="no-lang">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-8">
          {/* Statement Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <FileText className="w-5 h-5" />
              Statement
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Textarea placeholder="Write your Statement Here" className="mb-4" />
              <div className="text-sm text-gray-500">or</div>
              <button className="flex items-center gap-2 text-blue-600 mx-auto mt-4">
                <Upload className="w-4 h-4" />
                Upload a PDF
              </button>
            </div>
          </div>

          {/* Agreement under Disputes Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <FileText className="w-5 h-5" />
              Agreement under Disputes
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <button className="flex flex-col items-center gap-2 text-blue-600 mx-auto">
                  <Upload className="w-6 h-6" />
                  <span>Upload the Contract</span>
                  <span className="text-xs text-gray-500">Max 25MB PDF</span>
                </button>
              </div>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <button className="flex flex-col items-center gap-2 text-blue-600 mx-auto">
                  <Upload className="w-6 h-6" />
                  <span>Arbitration Agreement</span>
                  <span className="text-xs text-gray-500">Max 25MB PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Documentation Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <FileText className="w-5 h-5" />
                Additional Documentation
              </div>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <button className="flex flex-col items-center gap-2 text-blue-600 mx-auto">
                <Upload className="w-6 h-6" />
                <span>Upload the Contract</span>
                <span className="text-xs text-gray-500">Max 25MB PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

